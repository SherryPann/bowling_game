var ScoringRule = require("../src/scoring_rule.js");
var Frame = require("../src/frame.js");

describe("ScoringRule", function(){

    var scoringRule;
    var game;

    beforeEach(function(){

        scoringRule = new ScoringRule();
        game = {
            frames:  [
                [ 10, 0 ], [ 7, 3 ], [ 9, 0 ], [ 10, 0 ], [ 0, 8 ],
                [ 8, 2 ], [ 0, 6 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 8, 1 ] ]
        };
    });

    describe("addStrikeBonus", function(){

        it("should return the bonus 10 point if it is strike", function(){

            expect(scoringRule.addStrikeBonus(0,game.frames)).toEqual(10);

        });

        it("should return the bonus balls 0 point if it is not a strike", function(){

            expect(scoringRule.addStrikeBonus(1, game.frames)).toEqual(0);
        });

        it("should return the bonus balls 20 point if it is a strike", function(){

            expect(scoringRule.addStrikeBonus(7, game.frames)).toEqual(20);

        });
    });

    describe("addSpareBonus", function(){

        it("should return the bonus balls 9 if it is a spare", function(){

            expect(scoringRule.addSpareBonus(1, game.frames)).toEqual(9);
        });

        it("should return the bonus balls 0 if it is not a spare", function(){

            expect(scoringRule.addSpareBonus(2, game.frames)).toEqual(0);
        });
    });

    describe("getFinalPoint", function(){

        it("should return the finalPoint in one whole Strike game", function(){

            var game = {
                frames:[
                    [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ],
                    [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 10 ] ]
            };

            expect(scoringRule.getFinalPoint(game)).toEqual(300);
        });

        it("should return the finalPoint in one whole miss game", function(){

            var game = {
                frames:  [
                    [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ],
                    [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 0, 0 ] ]
            };

            expect(scoringRule.getFinalPoint(game)).toEqual(90);
        });

        it("should return the finalPoint in one whole spare game", function(){

            var game = {
                frames:  [
                    [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ],
                    [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 0 ] ]
            };

            expect(scoringRule.getFinalPoint(game)).toEqual(150);
        });

        it("should return the finalPoint in one mixed game", function(){

            var game = {
                frames:  [
                    [ 10, 0 ], [ 7, 3 ], [ 9, 0 ], [ 10, 0 ], [ 0, 8 ],
                    [ 8, 2 ], [ 0, 6 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 8, 1 ] ]
            };

            expect(scoringRule.getFinalPoint(game)).toEqual(167);
        });
    });
})