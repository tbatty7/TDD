
const expect = require('chai').expect;

describe("Calculating Prime Factors Tests", function(){
	it('There should be a valid module', function(){
		const PrimeFactors = require('./app');
	});

	describe('Testing for numbers', ()=>{
		it('It should give the prime factor of null for 1', ()=>{
			expect(PrimeFactors.of(1)).to.equal([]);
		});

	});

});