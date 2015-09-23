var Frame = require("../src/frame.js");

describe("Frame", function(){

    describe("Constructor", function(){

        it("should receive balls as parameters", function(){

            var frame = new Frame([ 3, 7]);
            expect(frame.balls).toEqual([3, 7]);
        });
    });

    describe("getStrikePoint", function(){

        it("should return 10 if frame is a strike", function(){

            var frame = new Frame([10, 0]);

            expect(frame.getStrikePoint()).toEqual(10);
        });

        it("should return 0 if frame is not a strike", function(){

            var frame = new Frame([3, 5]);

            expect(frame.getStrikePoint()).toEqual(0);
        })
    });

    describe("getSparePoint", function(){

        it("should return 10 if frame is a spare", function(){

            var frame = new Frame([5, 5]);

            expect(frame.getSparePoint()).toEqual(10);
        });

        it("should return 0 if frame is not a spare", function(){

            var frame = new Frame([3, 5]);

            expect(frame.getSparePoint()).toEqual(0);
        });
    });

    describe("getMissPoint", function(){

        it("should return 9 if frame is a miss", function(){

            var frame = new Frame([5, 4]);

            expect(frame.getMissPoint()).toEqual(9);
        });

        it("should return 0 if frame is not a miss", function(){

            var frame = new Frame([5, 5]);

            expect(frame.getMissPoint()).toEqual(0);
        })
    });
})