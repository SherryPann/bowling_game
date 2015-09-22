function ScoringRule(){}

ScoringRule.prototype.getFinalPoint = function(game){
    var finalPoint = 0;

    for(var i = 0; i < 10; i++){

        if(this.addStrikeBonus( i, game.frames)){

            finalPoint += 10 + this.addStrikeBonus( i, game.frames);

        }
        else if(this.addSpareBonus(i, game.frames)){

            finalPoint += 10 + this.addSpareBonus( i, game.frames);
        }
        else {
            finalPoint += game.frames[i][0] + game.frames[i][1];
        }

    }
    return finalPoint;
}

ScoringRule.prototype.addStrikeBonus = function(i, frames){

    if(frames[i][0] === 10){

       return frames[i + 1][0] + (frames[i + 1][1] || frames[i + 2][0] || 0);
    }
    else{
        return 0;
    }
}

ScoringRule.prototype.addSpareBonus = function(i, frames){

    if(frames[i][0] + frames[i][1] === 10){

       return frames[i + 1][0];
    }

    else {
        return 0;
    }
}

module.exports = ScoringRule;