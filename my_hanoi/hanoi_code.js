class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  promptMove(user, cb) {
    this.print();
    user.question("Pick a tower to take from", start => {
      const startTowerIdx = parseInt(start);
      user.question("Pick a tower to place on", end => {
        const endTowerIdx = parseInt(end);
        cb(startTowerIdx, endTowerIdx);
      });
    });
  }
}