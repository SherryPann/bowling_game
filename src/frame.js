var TEN = require("./constant.js").TEN;

function Frame(balls){
    this.balls = balls;
}

Frame.prototype.isStrike = function(){

    if(this.balls[0] === TEN){

        return TEN;
    }
    return 0;
}

Frame.prototype.isSpare = function(){

    if(this.balls[0] + this.balls[1] === TEN){

        return TEN;
    }
    return 0;
}

Frame.prototype.isMiss = function(){

    if(!(this.isStrike() || this.isSpare())){

        return this.balls[0] + this.balls[1];
    }
    return 0;
}

module.exports = Frame;