const capitalize = require("../code/capitalize");

test("capitalize test 1", () => {
    expect(capitalize("test")).toBe("Test")
});

test("capitalize test 2", () => {
    expect(capitalize("teSt")).toBe("TeSt")
});

test("capitalize test 2", () => {
    expect(capitalize("")).toBeUndefined()
});