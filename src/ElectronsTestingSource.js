function generateArray() {}

generateArray.prototype.generate = function (size) {
  let array = [];

  for (index = 0; index < size; index++) {
    array[index] = index + 1;
  }

  return array;
};
