
const assert = require("assert").strict;

const array = [
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'Buzz'
];

const expectedArray = [
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz'
];

const FizzBuzz = (array) => {
  const newArray = [];
  array?.forEach((item, index) => {
    if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
      newArray.push('FizzBuzz');
    } else {
      newArray.push(item);
    }
  })

  // Mapping function
  return newArray;
};

describe("Replacing numbers divisible by 3 & 5 with Fizzbo", () => {
  it("Successful replacement", () => {
    assert.deepEqual(FizzBuzz(array), expectedArray);
  });
});
