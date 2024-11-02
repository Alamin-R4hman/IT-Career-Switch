const team = {
  _players: [
    {firstName: 'Sid', lastName: 'Squid', age: 21,},
    {firstName: 'Dan', lastName: 'Man', age: 28,},
    {firstName: 'Max', lastName: 'Branning', age: 45}
  ],
  _games: [
    {opponent: 'Giants', teamPoints:50, opponentPoints: 49 },
    {opponent: 'Midgets', teamPoints:91, opponentPoints: 1 },
    {opponent: 'Humans', teamPoints:50, opponentPoints: 50 }
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players);

team.addGame('Titans', 100, 98)
console.log(team.games);
