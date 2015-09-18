var Frame = require("../src/frame.js");

describe("Frame",function(){

    describe("constructor",function(){
        it("should receive number and balls as parameteres",function(){
            var frame  = new Frame(1,['X']);
            expect(frame.number).toEqual(1);
            expect(frame.balls).toEqual(['X']);
        });
    });
})