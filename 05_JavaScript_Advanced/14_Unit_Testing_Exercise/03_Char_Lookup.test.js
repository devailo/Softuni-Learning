const lookupChar = require('./03_Char_Lookup');
//const { expect } = require('chai');
const { assert } = require('chai');

describe('Testing if isOddOrEven function is working correctly',()=>{

    it('should return undefined if string is not a string',()=>{
        let result = lookupChar(10,1);
        let expected = undefined;

        assert.equal(result,expected);
    });
    it('should return undefined if index is float',()=>{
        let result = lookupChar('pipi',1.5);
        let expected = undefined;

        assert.equal(result,expected);
    });
    it('should return undefined if index is not a number',()=>{
        let result = lookupChar('soso', '5');
        let expected = undefined;

        assert.equal(result,expected);
    });
    it('should return undefined if both inputs are wrong',()=>{
        let result = lookupChar({}, '5');
        let expected = undefined;

        assert.equal(result,expected);
    });
    it('should return incorrect index if index is below 0',()=>{
        let result = lookupChar('soso', -1);
        let expected = "Incorrect index";

        assert.equal(result,expected);
    });
    it('should return incorrect index if index is above length',()=>{
        let result1 = lookupChar('soso', 55);
        let expected = "Incorrect index";

        assert.equal(result1,expected);
    });
    it('should return incorrect index if index is length',()=>{
        let result = lookupChar('soso', 4);
        let expected = "Incorrect index";

        assert.equal(result,expected);
    });
    it('should return the correct letter',()=>{
        let result = lookupChar('pepe', 0);
        let expected = 'p';

        assert.equal(result,expected);
    });
    it('should return the correct letter',()=>{
        let result = lookupChar('pepe', 3);
        let expected = 'e';

        assert.equal(result,expected);
    });
});