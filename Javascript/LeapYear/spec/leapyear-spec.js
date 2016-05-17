/**
       Write a function that returns true or false
       depending on whether its input integer is a leap year or not.
       A leap year is divisible by 4, 
       but is not otherwise divisible by 100 
       unless it is also divisible by 400.

       2001 is a typical common year
       1996 is a typical leap year
       1900 is an atypical common year 
       2000 is an atypical leap year
    * */
var leapyear = require("../leapyear.js");

describe("2001 is not a leap year", function() {
    it("Should return false when checking if 2001 is a leap year", function () {
        var isLeapYear = leapyear.isLeapYear(2001);
        expect(isLeapYear).toBe(false);
    });
});
describe("1996 is a leap year", function() {
    it("Should return true when checking if 1996 is a leap year", function() {
        var isLeapyear = leapyear.isLeapYear(1996);
        expect(isLeapyear).toBe(true);
    });
});
describe("1992 is a leap year", function() {
    it("Should return true when checking if 1992 is a leap year", function () {
        var isLeapYear = leapyear.isLeapYear(1992);
        expect(isLeapYear).toBe(true);
    });
});