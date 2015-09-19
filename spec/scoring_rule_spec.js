var ScoringRule = require("../src/scoring_rule.js");
var Frame = require('../src/frame.js');

describe("ScoringRule",function(){
    var scoringRule;
    var game;

    beforeEach(function(){

        scoringRule = new ScoringRule();
        game = {
            frames: [
                new Frame(1,['X']),new Frame(2,['7','/']),new Frame(3,['9','-']), new Frame(4,['X']),
                new Frame(5,['-','8']),new Frame(6,['8','/']),new Frame(7,['-','6']),
                new Frame(8,['X']),new Frame(9,['X']),new Frame(10,['X'])]
            ,
            bonus: {balls:['8','1']}
        };
    });

    describe("addStrikeBonus",function(){

        it("should return the bonus balls of a frame number 1 if it is strike",function(){

            expect(scoringRule.addStrikeBonus(1,game)).toEqual(['7','/']);
        });

        it("should return the bonus balls of a frame number 10 if it is a strike",function(){

            expect(scoringRule.addStrikeBonus(10,game)).toEqual(game.bonus.balls);
        });

    });

    describe("addSpareBonus",function(){

        it("should return the bonus balls of a frame number 1 if it is spare",function(){

            expect(scoringRule.addSpareBonus(2,game)).toEqual('9');
        });

        it("should return the bonus balls of a frame number 10 if it is a spare",function(){
            game = {
                frames: [
                    new Frame(1,['X']),new Frame(2,['7','/']),new Frame(3,['9','-']), new Frame(4,['X']),
                    new Frame(5,['-','8']),new Frame(6,['8','/']),new Frame(7,['-','6']),
                    new Frame(8,['X']),new Frame(9,['X']),new Frame(10,['2','/'])]
                ,
                bonus: {balls:['8']}
            };

            expect(scoringRule.addSpareBonus(10,game)).toEqual(game.bonus.balls[0]);
        });

    });

})