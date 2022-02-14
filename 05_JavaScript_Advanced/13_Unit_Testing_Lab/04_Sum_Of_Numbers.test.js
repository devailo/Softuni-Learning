const expect = require('chai').expect;
const sum = require('./04_Sum_Of_Numbers');
describe('sum of Numbers', () => {
    it('should return the sum of the numbers in the array', () =>{
        let numbers = [1,2,3,4,5];
        let expectedSum = 15;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    });

    it('should return the sum with negatives in the array', () =>{
        let numbers = [1,2,3,4,-5];
        let expectedSum = 5;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    });

    it('should return zero when only zero is given', () =>{
        let numbers = [0,0,0];
        let expectedSum = 0;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    });

    it('should return zero when only zero is given', () =>{
        let numbers = [0,0,0];
        let expectedSum = 0;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum)
    });
});