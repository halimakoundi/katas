var fizzbuzz = require("../fizzbuzz.js");

describe("give 1 returns 1", function(){
	it("Should return 1 when given 1", function(){
		var response = fizzbuzz.returnValue(1);
		expect(response).toBe(1);
	});
});
describe("give 2 returns 2", function(){
	it("Should return 2 when given 2", function(){
		var response = fizzbuzz.returnValue(2);
		expect(response).toBe(2);
	});
});
describe("give 3 returns Fizz", function(){
	it("Should return Fizz when given 3", function(){
		var response = fizzbuzz.returnValue(3);
		expect(response).toBe("Fizz");
	});
});