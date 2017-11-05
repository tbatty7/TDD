var app = function(){};

app.prototype.fizzBuzz = function(num){
	if (num % 3 === 0){
		return "Fizz";
	} else if (num % 5 === 0){
		return "Buzz";
	}
	return num;
};

module.exports = new app();