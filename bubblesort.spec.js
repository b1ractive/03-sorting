describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a disordered array", function () {
    expect(bubbleSort([2, 4, 1, 5, 3])).toEqual([1, 2, 3, 4, 5]);
  });
  it("handles an ordered array", function () {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it("handles an inverted array", function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
