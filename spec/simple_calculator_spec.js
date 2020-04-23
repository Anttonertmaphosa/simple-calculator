let {add, multiply} = require("../src/simple_calculator");

describe("Add functionality", function() {
    it("calculates x + y = z", function()  {
        expect(add(23, 2)).toEqual(26);
        expect(add(1, 1)).toEqual(2);
        expect(add(3, 5)).toEqual(8);
        expect(add(5, 7)).toEqual(12);
    })
})

describe("Multiply functionality", function()  {
    it("calculates x * y = z", function() {
        expect(multiply(5, 5)).toEqual(26);
        expect(multiply(10, 2)).toEqual(20);
        expect(multiply(2, 2)).toEqual(4);
        expect(multiply(6, 2)).toEqual(12);
    })
})