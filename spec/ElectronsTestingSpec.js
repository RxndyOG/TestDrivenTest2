describe("Electrons testing", function () {
  array = new generateArray.prototype.generate(5);

  let sum = calculateArray.prototype.sum(array);

  it("test", function () {
    expect(array).not.toBeNaN;
  });

  it("Array test", function () {
    expect(array[1]).toEqual(2);
  });

  it("Array = 1 test", function () {
    expect(sum).toEqual(6);
  });
});
