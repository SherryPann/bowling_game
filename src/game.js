var Frame = require("./frame.js");
var TEN = require("./constant.js").TEN;

function Game(){
    this.frames = [];
}

Game.prototype.transform = function(string){

    var frames = string.split('||')[0].split('|');

    for(var i = 0; i < frames.length; i ++){
        var balls =  this.getBallsPoint(frames[i].split(''));

        this.frames.push(new Frame(balls));
    }

    var bonus = this.getBallsPoint(string.split('||')[1].split(''));
    this.frames.push(new Frame(bonus));

}

Game.prototype.getBallsPoint = function(balls){

    var ballsPoint = [];

    ballsPoint.push( balls[0] === 'X' ? TEN : parseInt(balls[0]) || 0);

    if(balls[1] === 'X'){

        ballsPoint.push( TEN );
    }
    else{

        ballsPoint.push( balls[1] === '/' ? (TEN - ballsPoint[0]) : parseInt(balls[1]) || 0);
    }
    return ballsPoint;
}

module.exports = Game;
