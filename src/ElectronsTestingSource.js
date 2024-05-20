function generateArray() {}

generateArray.prototype.generate = function (size) {
  let array = [];

  for (index = 0; index < size; index++) {
    array[index] = index + 1;
  }

  return array;
};

function calculateArray() {}

calculateArray.prototype.sum = function (array) {
  let sum = 0;

  array.forEach((element) => {
    if (element % 2 == 1) {
      sum += element - 1;
    }
  });

  return sum;
};
