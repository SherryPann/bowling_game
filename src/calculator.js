var TEN = require("./constant.js").TEN;

function Calculator(){}

Calculator.prototype.getFinalPoint = function(game){

    var finalPoint = 0;

    for(var i = 0; i < TEN; i++){
        if(game.frames[i].getStrikePoint()){

            finalPoint += game.frames[i].getStrikePoint() + game.frames[i + 1].balls[0] +
                (game.frames[i + 1].balls[1] || game.frames[ i + 2].balls[0] || 0);
        }
        else if(game.frames[i].getSparePoint()){

            finalPoint += game.frames[i].getSparePoint() + game.frames[i + 1].balls[0];
        }
        else {
            finalPoint += game.frames[i].getMissPoint();
        }
    }
        return finalPoint;
}

module.exports = Calculator;