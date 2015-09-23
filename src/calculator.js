var TEN = require("./constant.js").TEN;

function Calculator(){}

Calculator.prototype.getFinalPoint = function(game){

    var finalPoint = 0;
    var frames = game.getFrames();

    for(var i = 0; i < TEN; i++){
        
        if(frames[i].getStrikePoint()){
            finalPoint += frames[i].getStrikePoint() + frames[i + 1].balls[0] +
                (frames[i + 1].balls[1] || frames[ i + 2].balls[0] || 0);
        }
        else if(frames[i].getSparePoint()){
            finalPoint += frames[i].getSparePoint() + frames[i + 1].balls[0];
        }
        else {
            finalPoint += frames[i].getMissPoint();
        }
    }
        return finalPoint;
}

module.exports = Calculator;