var Game = require("./game.js");
var Calculator = require("./calculator.js");

function getGamePoint(inputString){

    var game = new Game();
    var calculator = new Calculator();

    game.transform(inputString);

    var point = calculator.getFinalPoint(game);

    return point;
}

module.exports = getGamePoint;