var TEN = require("./constant.js").TEN;

function Frame(balls){
    this.balls = balls;
}

Frame.prototype.getStrikePoint = function(){

    if(this.balls[0] === TEN){

        return TEN;
    }
    return 0;
}

Frame.prototype.getSparePoint = function(){

    if(this.balls[0] + this.balls[1] === TEN){

        return TEN;
    }
    return 0;
}

Frame.prototype.getMissPoint = function(){

    if(!(this.getStrikePoint() || this.getSparePoint())){

        return this.balls[0] + this.balls[1];
    }
    return 0;
}

module.exports = Frame;