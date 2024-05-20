describe("Electrons testing", function () {
  array = new generateArray.prototype.generate(5);

  let sum = 0;

  array.forEach((element) => {
    if (element % 2 == 1) {
      sum += element - 1;
    }
  });

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
