var RomanNumerals = function(){};

let numerals = [
	{number: 4, numeral: "IV"},
	{number: 1, numeral: "I"},
];

RomanNumerals.prototype.fromNumber = function(num){
	let result = "";
	numerals.forEach(function(item){
		while (num >= item.number){
			result += item.numeral;
			num -= item.number;
		}
	});
	return result;
};

module.exports = new RomanNumerals();