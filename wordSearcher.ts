/* eslint-disable max-len */

enum Direction {
  left,
  right,
  down,
  up,
  all,
}

type Pair = [number, number]  
export default class WordSearcher {
  soup: string[][];

  constructor(soup: string[][]) {
    this.soup = soup;
  }
   public lookupNear(
    pair: Pair,
    char: string,
    omitDirection: Direction
  ): number[][] {
    let possibles = [];
    let i: number = pair[0];
    let j: number = pair[1];
    
    if (j < this.soup[i].length - 1 && omitDirection !== Direction.right) {
      if (this.soup[i][j + 1] == char) {
        possibles.push([i, j + 1, Direction.left]);
      }
    }

    if (j > 0 && omitDirection !== Direction.left) {
      if (this.soup[i][j - 1] == char) {
        possibles.push([i, j - 1, Direction.right]);
      }
    }

    if (i > 0 && omitDirection !== Direction.up) {
      if (this.soup[i - 1][j] == char) {
        possibles.push([i - 1, j, Direction.down]);
      }
    }

    if (i < this.soup.length - 1 && omitDirection !== Direction.down) {
      if (this.soup[i + 1][j] == char) {
        possibles.push([i + 1, j, Direction.up]);
      }
    }

    return possibles;
  }

  public searchCoincidences(char: string): number[] {
    let coincidences: any = [];
    this.soup.forEach((row, i) => {
      row.forEach((v, j) => {
        if (v == char) coincidences.push([i, j]);
      });
    });
    return coincidences;
  }

  public isPresent(word: string): boolean {
    let startPoints = this.searchCoincidences(word[0]);

    let newStartPoints = startPoints.map((pair: any) =>
      pair.concat([Direction.all])
    );

    let isWordInSoup: boolean = false;

    for (let c = 1; c < word.length; c++) {
      let nextStartPoints: any = [];

      newStartPoints.forEach((point) => {
        let pair: [number, number] = [point[0], point[1]];
        let direction: Direction = point[2]
        const possibles: any = this.lookupNear(pair, word[c], direction);

        if (possibles.length > 0) {
          nextStartPoints = nextStartPoints.concat(
            possibles
          );
        }
      });

      if (nextStartPoints.length) {
        newStartPoints = [].concat(nextStartPoints);
        if (c === word.length - 1) {
            isWordInSoup = true;
        }
      } else {
        break;
      }
    }
    return isWordInSoup;
  }
}
