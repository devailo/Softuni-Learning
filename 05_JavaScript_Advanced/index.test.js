const sumOftwo = require('./index.js');
const { expect } = require('chai');
const { assert } = require('chai');

describe('Test functionality', () => {
    it('test with 2 numbers', () => {
        let expected = 7;
        assert.equal(sumOftwo(3,4), expected);
    });
    it('test with string and number', () => {
        let expected = 7;
        assert.equal(sumOftwo('3',4), expected);
    });
    it('test with expect', () => {
        let input = sumOftwo(4,4);
        let expected = 7;
        expect(input).to.equal(expected)
    });

});