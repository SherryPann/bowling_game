var ScoringRule = require("../src/scoring_rule.js");
var Frame = require('../src/frame.js');

describe("ScoringRule",function(){
    var scoringRule;

    beforeEach(function(){
        scoringRule = new ScoringRule();
        var game = {
            frames: [
                new Frame(1,['X']),new Frame(2,['7','/']),new Frame(3,['9','-']), new Frame(4,['X']),
                new Frame(5,['-','8']),new Frame(6,['8','/']),new Frame(7,['-','6']),
                new Frame(8,['X']),new Frame(9,['X']),new Frame(10,['X'])]
            ,
            bonus: {balls:['8','1']}
        };
    });

    describe("addStrikeBonus",function(){

        it("should return the bonus balls of a frame if it is strike",function(){

            expect(scoringRule.addStrikeBonus(1,games)).toEqual(['7','/']);
        });
    });

})