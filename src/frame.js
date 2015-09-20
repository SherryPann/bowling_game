var ScoringRule = require('./scoring_rule.js');

function Frame(number,balls){

    this.number = number;
    this.balls = balls;
}

Frame.prototype.getEachPoint = function(game){
    var scoringRule = new ScoringRule();
    var rule = this.balls.filter(function(ball){
        return ball === 'X'||ball === '/'||ball === '-';
    });

    switch (rule[0]){
        case 'X':
            return scoringRule.stringToDigital(this.balls)[0] + scoringRule.addStrikeBonus(this.number,game)[0]+ scoringRule.addStrikeBonus(this.number,game)[1];
        case '/': return scoringRule.stringToDigital(this.balls)[0] + scoringRule.stringToDigital(this.balls)[1] + scoringRule.addSpareBonus(this.number,game)[0];
        case '-':return scoringRule.stringToDigital(this.balls)[0]+scoringRule.stringToDigital(this.balls)[1];
    }
}



module.exports = Frame;