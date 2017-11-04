var PrimeFactors = function() {};

PrimeFactors.prototype.of = function(n) {
	var result = [];
	while (n > 1) {
		if (0 === n % 2){
			result.push(2);
			n /= 2;
		} else {
			result.push(n);
			break;
		}
	}
	return result;
};

module.exports = new PrimeFactors();