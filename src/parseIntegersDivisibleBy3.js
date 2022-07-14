function parseIntegersDivisibleBy3(integerArray) {
  var newArray = [];

  for (var i = 0; i < integerArray.length; i++) {
    var integer = integerArray[i];

    if (integer % 3 === 0 && typeof integer !== "string") {
      newArray.push("Fizz");
    } else {
      newArray.push(integer);
    }
  }

  return newArray;
}

module.exports = parseIntegersDivisibleBy3;
