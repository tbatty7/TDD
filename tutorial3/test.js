const expect = require('chai').expect;

describe("FizzBuzz", ()=>{
	it('should have a valid module', ()=>{
		const fizzBuzz = require('./fizzBuzz');

		describe('FizzBuzz testing', ()=>{
			it('should return 1 when 1 is entered', ()=>{
				expect(fizzBuzz.fizzBuzz(1)).to.equal(1);
			});

			it('should return 2 when 2 is entered', ()=>{
				expect(fizzBuzz.fizzBuzz(2)).to.equal(2);
			});

			it('should return "Fizz" when a multiple of 3 is entered', ()=>{
				expect(fizzBuzz.fizzBuzz(3)).to.equal("Fizz");
				expect(fizzBuzz.fizzBuzz(6)).to.equal("Fizz");
			});

			it('should return "Buzz" when a multiple of 5 is entered', ()=>{
				expect(fizzBuzz.fizzBuzz(5)).to.equal("Buzz");
				expect(fizzBuzz.fizzBuzz(10)).to.equal("Buzz");
			});

		});

	});
});