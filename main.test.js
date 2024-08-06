const { expect } = require('chai');
const { run } = require('./main');

describe("FizzBuzz Sequence", function () {
    it("should return the correct sequence for input 1, 5", function () {
        const result = run(1, 5);
        expect(result).to.equal("1,2,Fizz,4,Buzz");
    });

    it("should return the correct sequence for input 3, 15", function () {
        const result = run(3, 15);
        expect(result).to.equal("Fizz,Fizz,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz");
    });

    it("should return the correct sequence for input 1, 1", function () {
        const result = run(1, 1);
        expect(result).to.equal("1");
    });

    it("should return the correct sequence for input 15, 15", function () {
        const result = run(15, 15);
        expect(result).to.equal("FizzBuzz");
    });

    // Additional test cases
    it("should handle a range where N and M are the same and neither is a multiple of 3 or 5", function () {
        const result = run(7, 7);
        expect(result).to.equal("7");
    });

    it("should handle a range with only multiples of 3", function () {
        const result = run(3, 9);
        expect(result).to.equal("Fizz,Fizz,Fizz,Fizz,Fizz");
    });

    it("should handle a range with only multiples of 5", function () {
        const result = run(5, 20);
        expect(result).to.equal("Buzz,FizzBuzz,Buzz,FizzBuzz,Buzz,FizzBuzz,Buzz,FizzBuzz,Buzz");
    });
});
