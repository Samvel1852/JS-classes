// Shiritori
// This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
// * First character of next word must match last character of previous word.
// * The word must not have already been said.

class Shiritory {
  constructor(words = [], game_over = true) {
    this.words = words;
    this.game_over = game_over;
  }

  play(word) {
    this.game_over = false;
    if (typeof word === "string") {
      if (this.words.length > 0) {
        if (
          this.words[this.words.length - 1][
            this.words[this.words.length - 1].length - 1
          ].toLowerCase() === word[0].toLowerCase() &&
          !this.words.includes(word)
        ) {
          this.words.push(word);
          return this.words;
        } else {
          this.game_over = true;
          //   this.words = [];
          return "Game Over";
        }
      } else {
        this.words.push(word);
        return this.words;
      }
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "Game restarted";
  }
}

let myShiritori = new Shiritory();

console.log(myShiritori.play("Yerevan"));
console.log(myShiritori.play("Nice"));
console.log(myShiritori.play("Moscow"));
console.log(myShiritori.play("London"));
console.log(myShiritori.restart());
console.log(myShiritori.play("London"));
