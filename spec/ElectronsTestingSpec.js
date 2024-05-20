describe("Electrons testing", function () {
  array = new generateArray.generate();

  it("test", function () {
    expect(array).not.toBeNaN;
  });
});
