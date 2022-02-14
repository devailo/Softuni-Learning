const isOddOrEven = require('./02_Is_Even_Or_Odd');
//const { expect } = require('chai');
const { assert } = require('chai');

describe('Testing if isOddOrEven function is working correctly',()=>{

    it('should return undefined if parameter is number',()=>{
        let result = isOddOrEven(10);
        let result1 = isOddOrEven({});
        let expected = undefined;

        assert.equal(result,expected);
        assert.equal(result1,expected);
    });
    it('should return undefined if parameter is empty',()=>{
        let result = isOddOrEven();
        let expected = undefined;

        assert.equal(result,expected);
    });
    it('should return even if parameter is even',()=>{
        let result = isOddOrEven('sese');
        let expected = 'even';

        assert.equal(result,expected);
    });
    it('should return odd if parameter is odd',()=>{
        let result = isOddOrEven('ses');
        let expected = 'odd';

        assert.equal(result,expected);
    });

});