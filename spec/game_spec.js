var Game = require("../src/game.js");

describe("Game",function() {

    describe(".scan", function () {

        it("should receive a string representing a bowling game and return the correct array", function () {
            var string = "X|X|X|X|X|X|X|X|X|X||XX";
            var game = new Game();
            var expectArray = {
                game: [
                    {frame: 1, balls: ["X"]}, {frame: 2, balls:[ "X"]},
                    {frame: 3, balls: ["X"]}, {frame: 4,  balls: ["X"]},
                    {frame: 5,  balls: ["X"]}, {frame: 6,  balls: ["X"]},
                    {frame: 7, balls: ["X"]}, {frame: 8,  balls: ["X"]},
                    {frame: 9,  balls: ["X"]}, {frame: 10,  balls: ["X"]}
                ]
                ,
                bonus: {balls:['X','X']}
            };
            expect(game.scan(string)).toEqual(expectArray);
        });
    });
});


