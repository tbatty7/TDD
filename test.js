var Name = require('./app.js');
const expect = require('chai').expect;

describe('first test', function(){
	it('It should return my name', function(){
		var name = new Name();
		expect(name.sayName()).to.equal('Tim Batty');
	});
});