var Game = require("../src/game.js");
var Frame = require("../src/frame.js");

describe("Game", function() {

    var game ;

    beforeEach(function(){

        game = new Game();
    })

    describe(".scan", function () {

        it("should receive a string 'X|X|X|X|X|X|X|X|X|X||XX' and return the correct object", function () {

            var string = "X|X|X|X|X|X|X|X|X|X||XX";
            var expectArray = {
                frames:[
                    [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ],
                    [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 10, 10 ] ]
            };

            game.scan(string);

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||' and return the correct object", function(){

            var string = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
            var expectArray = {
                frames:  [
                    [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ],
                    [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 9, 0 ], [ 0, 0 ] ]
            };

            game.scan(string)

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 ' and return the correct object", function(){

            var string = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 ";
            var expectArray = {
                frames:  [
                    [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ],
                    [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 5 ], [ 5, 0 ] ]
            };

            game.scan(string)

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string 'X|7/|9-|X|-8|8/|-6|X|X|X||81' and return the correct object", function(){

            var string = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
            var expectArray = {
                frames:  [
                    [ 10, 0 ], [ 7, 3 ], [ 9, 0 ], [ 10, 0 ], [ 0, 8 ],
                    [ 8, 2 ], [ 0, 6 ], [ 10, 0 ], [ 10, 0 ], [ 10, 0 ], [ 8, 1 ] ]
            };

            game.scan(string)

            expect(game.frames).toEqual(expectArray.frames);
        });
    });
});


