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
                    new Frame( [ 10, 0 ] ), new Frame( [ 10, 0 ] ), new Frame( [ 10, 0 ] ),
                    new Frame([ 10, 0 ] ), new Frame([ 10, 0 ] ), new Frame( [ 10, 0 ] ),
                    new Frame( [ 10, 0 ] ), new Frame([ 10, 0 ] ), new Frame( [ 10, 0 ] ),
                    new Frame( [ 10, 0 ] ), new Frame( [ 10, 10] ) ]
            };

            game.transform(string);

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||' and return the correct object", function(){

            var string = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
            var expectArray = {
                frames:[
                    new Frame( [ 9, 0 ] ), new Frame( [ 9, 0 ]), new Frame( [ 9, 0 ] ),
                    new Frame( [ 9, 0 ] ), new Frame( [ 9, 0 ] ), new Frame( [ 9, 0 ] ),
                    new Frame( [ 9, 0 ] ), new Frame( [ 9, 0 ] ), new Frame( [ 9, 0 ] ),
                    new Frame( [ 9, 0 ] ), new Frame( [ 0, 0 ] ) ]

            };

            game.transform(string)

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 ' and return the correct object", function(){

            var string = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 ";
            var expectArray = {
                frames:  [
                    new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ),
                    new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ),
                    new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ), new Frame( [ 5, 5 ] ),
                    new Frame( [ 5, 5 ] ), new Frame( [ 5, 0  ] ) ]
            };

            game.transform(string)

            expect(game.frames).toEqual(expectArray.frames);
        });

        it("should receive a string 'X|7/|9-|X|-8|8/|-6|X|X|X||81' and return the correct object", function(){

            var string = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
            var expectArray = {
                frames:  [
                    new Frame( [ 10, 0 ] ), new Frame( [ 7, 3 ] ), new Frame( [ 9, 0 ] ),
                    new Frame( [ 10, 0 ] ), new Frame( [ 0, 8 ] ), new Frame( [ 8, 2 ] ),
                    new Frame( [ 0, 6 ] ), new Frame( [ 10, 0 ] ), new Frame( [ 10, 0 ] ),
                    new Frame( [ 10, 0 ] ), new Frame( [ 8, 1 ] ) ]
            };


            game.transform(string)

            expect(game.frames).toEqual(expectArray.frames);
        });
    });
});


