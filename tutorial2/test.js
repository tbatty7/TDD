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

		});

	});
});