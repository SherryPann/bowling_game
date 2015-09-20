var Frame = require("./frame.js");

function Game(){}

Game.prototype.scan = function(string){

    var frames = string.split("|",10);

    frames = this.getFrames(frames);

    var bonusBalls = string.split('||')[1].split('');

    return {frames:frames, bonus:{balls:bonusBalls}};

}

Game.prototype.getFrames = function(frames){

    var result = [];

    for(var i = 0; i < frames.length; i ++){
        var balls =  frames[i].split('');
        result.push(new Frame(i+1,balls));
    }
    return result;
}

Game.prototype.getFinalPoint = function(game){
    var point = 0;


    game.frames.forEach(function(frame){
        point += frame.getEachPoint(game)
    });

    return point;
}



module.exports = Game;
