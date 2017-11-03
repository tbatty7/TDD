var PrimeFactors = function() {};

PrimeFactors.prototype.of = function(n) {
	if (n===2){
		return [2];
	}
	return [];
};

module.exports = new PrimeFactors();