var Game = require("../src/game.js");
var Frame = require("../src/frame.js");

describe("Game",function() {
    var game ;
    beforeEach(function(){
        game = new Game();
    })

    describe(".scan", function () {

        it("should receive a string 'X|X|X|X|X|X|X|X|X|X||XX' representing a bowling game and return the correct object", function () {
            var string = "X|X|X|X|X|X|X|X|X|X||XX";
            var expectArray = {
                frames: [
                    new Frame(1,['X']),new Frame(2,['X']),new Frame(3,['X']), new Frame(4,['X']),
                    new Frame(5,['X']),new Frame(6,['X']),new Frame(7,['X']),
                    new Frame(8,['X']),new Frame(9,['X']),new Frame(10,['X'])]
                ,
                bonus: {balls:['X','X']}
            };
            expect(game.scan(string)).toEqual(expectArray);
        });
        it("should receive a string '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||' representing a bowling game and return the correct object",function(){
            var string = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
            var expectArray = {
                frames: [
                    new Frame(1,['9','-']),new Frame(2,['9','-']),new Frame(3,['9','-']), new Frame(4,['9','-']),
                    new Frame(5,['9','-']),new Frame(6,['9','-']),new Frame(7,['9','-']),
                    new Frame(8,['9','-']),new Frame(9,['9','-']),new Frame(10,['9','-'])]
                ,
                bonus: {balls:[]}
            };
            expect(game.scan(string)).toEqual(expectArray);
        });
        it("should receive a string 'X|7/|9-|X|-8|8/|-6|X|X|X||81' representing a bowling game and return the correct object",function(){
            var string = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
            var expectArray = {
                frames: [
                    new Frame(1,['X']),new Frame(2,['7','/']),new Frame(3,['9','-']), new Frame(4,['X']),
                    new Frame(5,['-','8']),new Frame(6,['8','/']),new Frame(7,['-','6']),
                    new Frame(8,['X']),new Frame(9,['X']),new Frame(10,['X'])]
                ,
                bonus: {balls:['8','1']}
            };
            expect(game.scan(string)).toEqual(expectArray);
        });
    });
});

