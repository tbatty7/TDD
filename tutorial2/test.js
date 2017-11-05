const expect = require('chai').expect;

describe('Roman Numeral Converter', ()=>{
	it('There should be a valid module', ()=>{
		const romanNumerals = require('./romanNumerals');
		
		describe('Tests for function to convert numbers to Roman Numerals', ()=>{
			it('should give the Numeral "I" for 1', ()=>{
				expect(romanNumerals.fromNumber(1)).to.equal('I');
			});
			
			it('should give the Numeral "II" for 2', ()=>{
				expect(romanNumerals.fromNumber(2)).to.equal('II');
			});

			it('should give the Numeral "III" for 3', ()=>{
				expect(romanNumerals.fromNumber(3)).to.equal('III');
			});

			it('should give the Numeral "IV" for 4', ()=>{
				expect(romanNumerals.fromNumber(4)).to.equal('IV');
			});

		});

	});
});