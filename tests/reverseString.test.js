const reverseString = require("../code/reverseString.js");

test("reverseString test 1", () => {
    expect(reverseString("test")).toBe("tset")
});

test("reverseString test 2", () => {
    expect(reverseString("TeSt")).toBe("tSeT")
});