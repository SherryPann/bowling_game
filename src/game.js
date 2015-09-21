var Frame = require("./frame.js");

function Game(){
    this.frames = [];
    this.bonus = {};
}

Game.prototype.scan = function(string){

    var frames = string.split("|",10);

    for(var i = 0; i < frames.length; i ++){
        var balls =  frames[i].split('');
        this.frames.push(new Frame(i+1,balls));
    }
    this.bonus['balls'] = string.split('||')[1].split('');


}

Game.prototype.getFinalPoint = function(game){
    var point = 0;


    game.frames.forEach(function(frame){
        point += frame.getEachPoint(game)
    });

    return point;
}



module.exports = Game;
