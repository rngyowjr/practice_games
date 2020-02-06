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

  move(firstTowerIdx, secondTowerIdx) {
    if (this.isValidMove(firstTowerIdx, secondTowerIdx)) {
      this.towers[secondTowerIdx].push(this.towers[firstTowerIdx].pop());
      return true
    } else {
      return false
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    return (this.towers[2].length === 3)
  }

  run(user, finishCallback) {
    this.promptMove(user, (firstTowerIdx, secondTowerIdx) => {
      if (!this.move(firstTowerIdx, secondTowerIdx)) {
        console.log("you can't make that move :(")
      }

      if (!this.isWon()) {
        this.run(user, finishCallback);
      } else {
        this.print();
        console.log("Winner Winner Chicken Dinner");
        finishCallback();
      }
    });
  }
}