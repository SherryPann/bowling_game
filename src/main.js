var Game = require("./game.js");


function getGamePoint(inputString){

    var game = new Game();

    game.scan(inputString);

    var point = game.getFinalPoint(game);

    return point;
}

module.exports = getGamePoint;