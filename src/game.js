var Frame = require("./frame.js");

function Game(){
    this.frames = [];
}

Game.prototype.scan = function(string){

    var frame = new Frame();
    var frames = string.split("|", 10);

    for(var i = 0; i < frames.length; i ++){
        var balls =  frames[i].split('');

        this.frames.push(frame.getBallsPoint(balls));
    }

    var bonus = string.split('||')[1].split('');
    this.frames.push(frame.getBallsPoint(bonus));

}

module.exports = Game;
