const mathEnforcer = require('./04_Math_Enforcer');
const { assert } = require('chai');

describe('mathEnforcer tests', () => {
    describe('addFive', () => {
        it('Should return correct result with a non-number param', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
        });
        it('Should return correct result with number param', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('Should return correct result with negative number param', () => {
            assert.equal(mathEnforcer.addFive(-55), -50);
        });
        it('Should sum floats correctly', () => {
            assert.closeTo(mathEnforcer.addFive(3.3000001), 8.3, 0.01);
        });
    });
    describe('subtractTen', () => {
        it('Should return correct result with a non-number param', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
        });
        it('Should return correct result with number param', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });
        it('Should return correct result with negative number param', () => {
            assert.equal(mathEnforcer.subtractTen(-55), -65);
        });
        it('Should sum floats correctly', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.3000001), -6.7, 0.01);
        });
    });
    describe('sum', () => {
        it('Should return correct result with one non-number param', () => {
            assert.equal(mathEnforcer.sum('5', 5), undefined);
        });
        it('Should return correct result with one non-number param', () => {
            assert.equal(mathEnforcer.sum(5, '5'), undefined);
        });
        it('Should return correct result with two non-number param', () => {
            assert.equal(mathEnforcer.sum('5', '5'), undefined);
        });
        it('Should sum both numbers', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
        });
        it('Should sum both negative numbers', () => {
            assert.equal(mathEnforcer.sum(-5, -5), -10);
        });
        it('Should sum floats correctly', () => {
            assert.closeTo(mathEnforcer.sum(5, 3.3000001), 8.3, 0.01);
        });
        it('Should sum floats correctly', () => {
            assert.closeTo(mathEnforcer.sum(3.3, 3.301), 6.6, 0.01);
        });
    });
});