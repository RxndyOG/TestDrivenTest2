describe("Electrons testing", function () {
  array = new generateArray.generate();

  it("test", function () {
    expect(array).not.toBeNaN;
  });

  it("Array test", function () {
    expect(array[1]).toEqual(2);
  });
});
