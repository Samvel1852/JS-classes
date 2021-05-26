// CustomConsole Class
// Create a CustomConsole class with following methods:
// * log function that takes user arguments and returns them as a string,
// * history function that takes an optional range as an argument,
// * clearHistory function to remove the history memory.
// * The log function has no limit of arguments.

class CustomConsole {
  constructor(consoleArgs) {
    this.consoleArgs = consoleArgs;
  }

  log(...inpArgs) {
    this.consoleArgs = JSON.stringify(inpArgs);
    return this.consoleArgs;
  }

  history(range) {
    if (range) {
      let newRange = range.split("-");
      newRange = newRange.map((item) => Number(item));
      let start = newRange[0];
      let end = newRange[1];
      return this.consoleArgs.slice(start, end + 1);
    }
    return this.consoleArgs;
  }

  clearHistory() {
    this.consoleArgs = "";
    return true;
  }
}

let myConsole = new CustomConsole();

console.log(myConsole.log({ a: 1, b: 2, c: false, d: null }, [1, 2, 34]));
console.log(myConsole.history("2 - 4"));
console.log(myConsole.clearHistory());
console.log(myConsole.history());
