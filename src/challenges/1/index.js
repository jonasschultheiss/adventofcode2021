const input = require("./input");

function partOne() {
  let timesInputIncreased = 0;
  for (let index = 1; index < input.length; index++) {
    if (input[index] > input[index - 1]) {
      timesInputIncreased++;
    }
  }

  return timesInputIncreased;
}

function partTwo() {
  let timesInputIncreased = 0;
  for (let index = 0; index + 3 < input.length; index++) {
    const a = input[index] + input[index + 1] + input[index + 2];
    const b = input[index + 1] + input[index + 2] + input[index + 3];
    if (a < b) {
      timesInputIncreased++;
    }
  }

  return timesInputIncreased;
}

module.exports = function solve() {
  return {
    partOne: partOne(),
    partTwo: partTwo(),
  };
};
