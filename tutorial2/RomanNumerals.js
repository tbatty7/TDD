var RomanNumerals = function(){};

var Numeral = function(value, numeral){
	return {number: value, numeral: numeral};
};

var numerals = [
	Numeral(1000, "M"),
	Numeral(900, "CM"),
	Numeral(500, "D"),
	Numeral(400, "CD"),
	Numeral(100, "C"),
	Numeral(90, "XC"),
	Numeral(50, "L"),
	Numeral(40, "XL"),
	Numeral(10, "X"),
	Numeral(9, "IX"),
	Numeral(5, "V"),
	Numeral(4, "IV"),
	Numeral(1, "I")
];

RomanNumerals.prototype.fromNumber = function(num){
	var result = "";
	numerals.forEach(function(item){
		for (; num >= item.number; num -= item.number){
			result += item.numeral;
		}
	});
	return result;
};

module.exports = new RomanNumerals();