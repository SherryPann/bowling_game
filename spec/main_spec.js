var getGamePoint = require("../src/main.js");

describe("getGamePoint",function(){
    it("should return the correct point of one bowling game that is a whole strike game",function(){
        var inputString = "X|X|X|X|X|X|X|X|X|X||XX ";
        expect(getGamePoint(inputString)).toEqual(300);
    });

    it("should return the correct point of one bowling game that is a whole miss game",function(){
        var inputString = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
        expect(getGamePoint(inputString)).toEqual(90);
    });

    it("should return the correct point of one bowling game that is a whole spare game",function(){
        var inputString = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
        expect(getGamePoint(inputString)).toEqual(150);
    });

    it("should return the correct point of one bowling game ",function(){
        var inputString = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
        expect(getGamePoint(inputString)).toEqual(167);
    });
})