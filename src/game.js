function Game(){}

Game.prototype.scan = function(string){
    var game = string.split("|",10);
    game = getGame(game);
    var bonus = string.split('||')[1];
    Bonus = getBonus(bonus);
    return {game:game, bonus:Bonus};

}

function getGame(game){
    var games = [];
    for(var i = 0; i < game.length; i ++){
        var balls =  game[i].split('');
        games.push({
            frame:i+1,
            balls:balls
        });
    }
    return games;
}

function getBonus(bonus){
    var Bonus = [];
    var balls = bonus.split('');
    Bonus = {balls:balls};
    return Bonus;
}

module.exports = Game;