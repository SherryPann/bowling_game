var Frame = require("../src/frame.js");

describe("Frame",function(){

    describe("constructor",function(){

        it("should receive number and balls as parameteres",function(){

            var frame  = new Frame(1, ['X']);

            expect(frame.number).toEqual(1);
            expect(frame.balls).toEqual(['X']);
        });
    });

    describe("getEachPoint",function(){

        it("can get the point of a frame",function(){

            var game = {
                frames: [
                    new Frame(1, ['X']),new Frame(2, ['7', '/']),new Frame(3, ['9', '-']), new Frame(4, ['-', '-']),
                    new Frame(5, ['-', '-']),new Frame(6, ['8', '/']),new Frame(7, ['-', '6']),
                    new Frame(8, ['X']),new Frame(9, ['X']),new Frame(10,['X'])]
                ,
                bonus: {balls:['8', '1']}
            };

            expect(game.frames[0].getEachPoint(game)).toEqual(20);
            expect(game.frames[1].getEachPoint(game)).toEqual(19);
            expect(game.frames[2].getEachPoint(game)).toEqual(9);
            expect(game.frames[4].getEachPoint(game)).toEqual(0);
        });
    });
})