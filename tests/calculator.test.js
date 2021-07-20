const calculator = require("../code/calculator");

test("add 1", () => {
    expect(calculator.add(10, 5)).toBe(15)
});

test("add 2", () => {
    expect(calculator.add(10, -5)).toBe(5)
});

test("sub 1", () => {
    expect(calculator.sub(10, 5)).toBe(5)
});

test("sub 2", () => {
    expect(calculator.sub(10, -5)).toBe(15)
});

test("div 1", () => {
    expect(calculator.div(10, 5)).toBe(2)
});

test("div 2", () => {
    expect(calculator.div(0, 5)).toBe(0)
});

test("div 3", () => {
    expect(calculator.div(10, 0)).toBe(Infinity)
});

test("mul 1", () => {
    expect(calculator.mul(10, 5)).toBe(50)
});

test("mul 2", () => {
    expect(calculator.mul(10, 0)).toBe(0)
});

test("mul 3", () => {
    expect(calculator.mul(10, -5)).toBe(-50)
});

