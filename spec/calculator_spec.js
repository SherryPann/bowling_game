var Calculator = require("../src/calculator.js");
var Game = require("../src/game.js");

describe("Calculator", function(){

    var calculator;

    beforeEach(function(){
        calculator = new Calculator();
    });

    describe("getFinalPoint", function(){

        it("should return the finalPoint in one whole Strike game", function(){

        var game = new Game();

        game.transform("X|X|X|X|X|X|X|X|X|X||XX");

        var finalPoint = calculator.getFinalPoint(game);

        expect(finalPoint).toEqual(300);
        });

        it("should return the finalPoint in one whole miss game", function(){

            var game = new Game();

            game.transform("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");

            var finalPoint = calculator.getFinalPoint(game);

            expect(finalPoint).toEqual(90);
        });

        it("should return the finalPoint in one whole spare game", function(){

            var game = new Game();

            game.transform("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 ");

            var finalPoint = calculator.getFinalPoint(game);

            expect(finalPoint).toEqual(150);
        });

        it("should return the finalPoint in one mixed game", function(){

            var game = new Game();

            game.transform("X|7/|9-|X|-8|8/|-6|X|X|X||81");

            var finalPoint = calculator.getFinalPoint(game);

            expect(finalPoint).toEqual(167);
        });
    });

})