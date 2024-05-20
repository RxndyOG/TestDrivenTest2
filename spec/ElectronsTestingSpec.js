describe("Electrons testing", function () {
  array = new generateArray.prototype.generate(5);

  it("test", function () {
    expect(array).not.toBeNaN;
  });

  it("Array test", function () {
    expect(array[1]).toEqual(2);
  });
});
