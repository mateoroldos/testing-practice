const caesarCipher = require("../code/caesarCipher")

test("Caesar Cipher Test 1", () => {
    expect(caesarCipher("hello", 0)).toBe("hello");
});

test("Caesar Cipher Test 2", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Caesar Cipher Test 2", () => {
    expect(caesarCipher("hello bro", 2)).toBe("jgnnq dtq");
});