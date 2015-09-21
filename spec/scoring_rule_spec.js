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

            expect(scoringRule.addStrikeBonus(1,game)).toEqual([7,3]);
        });

        it("should return the bonus balls of a frame number 10 if it is a strike",function(){

            expect(scoringRule.addStrikeBonus(10,game)).toEqual([8,1]);
        });

        it("should return the bonus balls 0f a frame number 9 if it is a strike",function(){
            expect(scoringRule.addStrikeBonus(9,game)).toEqual([10,8]);
        });

    });

    describe("addSpareBonus",function(){

        it("should return the bonus balls of a frame number 1 if it is spare",function(){

            expect(scoringRule.addSpareBonus(2,game)).toEqual([9]);
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

            expect(scoringRule.addSpareBonus(10,game)).toEqual([8]);
        });

    });

    describe("stringToDigital",function(){

        it("should return the each ball's point  ",function(){

            expect(scoringRule.stringToDigital(game.frames[1].balls)).toEqual([7,3]);
            expect(scoringRule.stringToDigital(game.frames[5].balls)).toEqual([8,2]);
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

            expect(scoringRule.addSpareBonus(10,game)).toEqual([8]);
        });


        it("should return the bonus balls of a frame if it is miss",function(){
            game = {
                frames: [
                    new Frame(1,['-','-']),new Frame(2,['-','-']),new Frame(3,['-','-']), new Frame(4,['-','-']),
                    new Frame(5,['-','-']),new Frame(6,['-','-']),new Frame(7,['-','-']),
                    new Frame(8,['-','-']),new Frame(9,['-','-']),new Frame(10,['-','-'])]
                ,
                bonus: {balls:[]}
            };

            expect(scoringRule.addSpareBonus(1,game)).toEqual([0]);
        });
    });
})