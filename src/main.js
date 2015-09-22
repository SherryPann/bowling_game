var Game = require("./game.js");
var ScoringRule = require("./scoring_rule.js");

function getGamePoint(inputString){

    var game = new Game();
    var scoringRule = new ScoringRule();

    game.scan(inputString);

    var point = scoringRule.getFinalPoint(game);

    return point;
}

module.exports = getGamePoint;