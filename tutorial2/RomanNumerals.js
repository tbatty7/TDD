var RomanNumerals = function(){};

RomanNumerals.prototype.fromNumber = function(num){
	let result = "";
	while (result.length < num){
		result = result + "I";
	}
	return result;
};

module.exports = new RomanNumerals();