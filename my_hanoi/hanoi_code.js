class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  promptMove(user, cb) {
    this.print();
    user.question("Pick a tower to take from", first => {
      const firstTowerIdx = parseInt(first);
      user.question("Pick a tower to place on", second => {
        const secondTowerIdx = parseInt(second);
        cb(firstTowerIdx, secondTowerIdx);
      });
    });
  }

  isValidMove(firstTowerIdx, secondTowerIdx) {
    const firstTower = this.towers[firstTowerIdx];
    const secondTower = this.towers[secondTowerIdx];

    if (firstTower.length === 0) {
      return false;
    } else if (secondTower.length === 0) {
      return true;
    } else {
      return firstTower[firstTower.length - 1] < secondTower[secondTower.length - 1]
    }
  }
}