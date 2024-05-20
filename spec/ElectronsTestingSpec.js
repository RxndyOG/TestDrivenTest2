describe("Electrons testing", function () {
  array = new generateArray.prototype.generate(5);
  solution = new calculateArray();

  let sum = solution.sum(array);

  array2 = [2,2,3,3];
  array3 = [6,6,4,4,1,3];
  array4 = [3,5,3,5,4,2];

  it("test", function () {
    expect(array).not.toBeNaN;
  });

  it("Array test", function () {
    expect(array[1]).toEqual(2);
  });

  it("Array = 1 test", function () {
    expect(sum).toEqual(6);
  });

  it("Array = 2 test", function () {
    expect(solution.sum(array2)).toEqual(4);
  });

  it("Array = 3 test", function () {
    expect(solution.sum(array3)).toEqual(2);
  });

  it("Array = 4 test", function () {
    expect(solution.sum(array4)).toEqual(12);
  });
});
