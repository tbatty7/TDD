var PrimeFactors = function() {};

PrimeFactors.prototype.of = function(n) {
	if (n > 1){
		return [n];
	}
	return [];
};

module.exports = new PrimeFactors();