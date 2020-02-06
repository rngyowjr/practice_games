const Game = require('./game.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let session = new Game();
session.run(user, finish);

function finish() {
  user.question("Play again? y or n:", input => {
    if (input === "y") {
      session = new Game();
      session.run(user, finish);
    } else {
      user.close();
    }
  });
};