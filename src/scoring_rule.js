function ScoringRule(){}

ScoringRule.prototype.addStrikeBonus = function(number,game){

    if(number === 10){
        return this.stringToDigital(game.bonus.balls);
    }
    else if(number === 9 && game.frames[9].balls[0] === 'X'){
        return this.stringToDigital([game.frames[9].balls[0], game.bonus.balls[0]]);
    }
    else {
        if(game.frames[number].balls.length === 2){
            return this.stringToDigital(game.frames[number].balls);
        }
        else{
            return this.stringToDigital([game.frames[number].balls[0], game.frames[number+1].balls[0]]);
        }
    }
}

ScoringRule.prototype.addSpareBonus = function(number,game){

    if(number === 10){
        return this.stringToDigital(game.bonus.balls);
    }
    else{
        return this.stringToDigital(game.frames[number].balls[0]);
    }
}

ScoringRule.prototype.stringToDigital = function(balls) {
    var bonusBall = [];

    for (var i = 0; i < balls.length; i++) {
        if (balls[i] === 'X') {
            bonusBall.push(10);
        }
        else if (balls[i] === '/') {
            bonusBall.push(10 - balls[0]);
        }
        else if (balls[i] === '-') {
            bonusBall.push(0);
        }
        else {
            bonusBall.push(parseInt(balls[i]));
        }
    }
    return bonusBall;
}

module.exports = ScoringRule;