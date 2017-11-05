const expect = require('chai').expect;

describe("FizzBuzz", ()=>{
	it('should have a valid module', ()=>{
		const fizzBuzz = require('./fizzBuzz');

		describe('FizzBuzz testing', ()=>{
			it('should return 1 when 1 is entered', ()=>{
				expect(fizzBuzz.fizzBuzz(1)).to.equal(1);
			});
		});

	});
});