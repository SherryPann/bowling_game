var ScoringRule = require('./scoring_rule.js');

function Frame(){}

Frame.prototype.getBallsPoint = function(balls){

    var ballsPoint = [];

    ballsPoint.push( balls[0] === 'X' ? 10 : parseInt(balls[0]) || 0);

    if(balls[1] === 'X'){

        ballsPoint.push( 10 );
    }
    else{

        ballsPoint.push( balls[1] === '/' ? (10 - ballsPoint[0]) : parseInt(balls[1]) || 0);
    }

    return ballsPoint;
}

module.exports = Frame;