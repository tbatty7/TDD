
const expect = require('chai').expect;

describe("Calculating Prime Factors Tests", function(){
	it('There should be a valid module', function(){
		const PrimeFactors = require('./app');

		describe('Testing for numbers', ()=>{
			it('It should give the prime factor of null for 1', ()=>{
				expect(PrimeFactors.of(1)).to.be.an('array').that.is.empty;
			});

			it('It should give the prime factor of 2 for 2', ()=>{
				expect(PrimeFactors.of(2)).to.be.an('array').that.includes(2);
			});

			it('It should give the prime factor of 3 for 3', ()=>{
				expect(PrimeFactors.of(3)).to.be.an('array').that.includes(3);
			});

			it('It should give the prime factors of [2,2] for 4', ()=>{
				expect(PrimeFactors.of(4)).to.have.members([2,2]);
			});

			it('It should give the prime factors of [5] for 5', ()=>{
				expect(PrimeFactors.of(5)).to.have.members([5]);
			});

			it('It should give the prime factors of [2,3] for 6', ()=>{
				expect(PrimeFactors.of(6)).to.have.members([2,3]);
			});

			it('It should give the prime factors of [7] for 7', ()=>{
				expect(PrimeFactors.of(7)).to.have.members([7]);
			});

			it('It should give the prime factors of [2,2,2] for 8', ()=>{
				expect(PrimeFactors.of(8)).to.have.members([2, 2, 2]);
			});


		});
	});


});
