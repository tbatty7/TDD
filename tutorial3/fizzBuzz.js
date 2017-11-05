var app = function(){};

app.prototype.fizzBuzz = function(num){
	if (0 === num % 3){
		return "Fizz";
	}
	return num;
};

module.exports = new app();