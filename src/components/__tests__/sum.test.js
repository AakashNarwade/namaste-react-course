const sum = require("../sum");

test("adds 1+2 to equal 3", () => {
  const result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
  // expect(sum(1, 2)).toBe(3);
});
