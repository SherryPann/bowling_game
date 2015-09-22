var Frame = require("../src/frame.js");

describe("Frame", function(){

    describe("StringToDigital", function(){

        it("can get digital point of balls in one frame", function(){

            var frame = new Frame();

            var input = ['5','/'];

            var balls = frame.getBallsPoint(input);

            expect(balls).toEqual([5, 5]);
        });
    });
})