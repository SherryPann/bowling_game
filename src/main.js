var Game = require("./game.js");


function getGamePoint(inputString){
    var game = new Game();
    var _game = game.scan(inputString);
    var point = game.getFinalPoint(_game);
    return point;
}

module.exports = getGamePoint;