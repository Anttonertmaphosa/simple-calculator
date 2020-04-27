let {add, multiply, addMultiple, multiplyMultiple} = require("../src/simple_calculator");

describe("Add functionality", function() {
    it("calculates w + x + y = z", function()  {
        expect(add(23, 2)).toEqual(25);
        expect(add(1, 1)).toEqual(2);
        })
})

describe("Multiply functionality", function()  {
    it("calculates x * y = z", function() {
        expect(multiply(5, 5)).toEqual(25);
        expect(multiply(10, 2)).toEqual(20);
    })
})

describe("add multiple numbers", function()  {
    it("calculates w + x + y = z", function() {
        expect(addMultiple(3, 4, 5)).toEqual(12);
        expect(addMultiple(4, 7, 8)).toEqual(19);
    })
})

describe("multiply multiple numbers", function() {
    it("calculates w * x * y = z", function() {
        expect(multiplyMultiple(4, 2, 1)).toEqual(8);
        expect(multiplyMultiple(10, 2, 5)).toEqual(100);
    })
})
