function ScoringRule(){}

ScoringRule.prototype.addStrikeBonus = function(number,game){
    if(number === 10){
        return game.bonus.balls;
    }
    else {
        if(game.frames[number].balls.length === 2){
            return game.frames[number].balls;
        }
        else{
            return [game.frames[number].balls[0],game.frames[number+1].balls[0]];
        }
    }
}

ScoringRule.prototype.addSpareBonus = function(number,game){
    if(number === 10){
        return game.bonus.balls[0];
    }
    else{
        return game.frames[number].balls[0];
    }
}

module.exports = ScoringRule;