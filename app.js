"use strict";

var Game = require("./src/game.js");
var Calculator = require("./src/calculator.js");
var bowlingString = require("./src/bowling_string.js");

function getFinalPoint(){

    var game = new Game();
    game.transform(bowlingString);
    var calculator = new Calculator();

    var finalPoint = calculator.getFinalPoint(game);

    console.log("This game is " + finalPoint +' points!');
}

getFinalPoint();