var TEN = require("./constant.js").TEN;
function Calculator(){}

Calculator.prototype.getFinalPoint = function(game){
        var finalPoint = 0;

        for(var i = 0; i < TEN; i++){

            if(game.frames[i].isStrike()){

                finalPoint += game.frames[i].isStrike() + game.frames[i + 1].balls[0] +
                    (game.frames[i + 1].balls[1] || game.frames[ i + 2].balls[0] || 0);
            }
            else if(game.frames[i].isSpare()){
                finalPoint += game.frames[i].isSpare() + game.frames[i + 1].balls[0];
            }
            else {
                finalPoint += game.frames[i].isMiss();
            }

        }
        return finalPoint;
}

module.exports = Calculator;