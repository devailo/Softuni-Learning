let flowerShop = require("./flowerShop");
let { assert } = require('chai');

describe("Tests …", function () {
    describe("calcPriceOfFlowers", function () {
        it("should multiply price and qty", function () {
            assert.equal(flowerShop.calcPriceOfFlowers('begonia', 2, 2),
                'You need $4.00 to buy begonia!');
            assert.equal(flowerShop.calcPriceOfFlowers('bubu', 1, 1),
                'You need $1.00 to buy bubu!');
        });
        it("should throw errors on incorrect input", function () {
            assert.Throw(() => flowerShop.calcPriceOfFlowers('begonia', 2.5, 2),
                'Invalid input!');
            assert.Throw(() => flowerShop.calcPriceOfFlowers('begonia', 2, 2.5),
                'Invalid input!');
            assert.Throw(() => flowerShop.calcPriceOfFlowers(2, 2, 2),
                'Invalid input!');
            assert.Throw(() => flowerShop.calcPriceOfFlowers(),
                'Invalid input!');
        });
    });
    describe("checkFlowersAvailable", function () {
        let gardenArr = ["Rose", "Lily", "Orchid"];
        it("should return a flower", function () {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', gardenArr),
                'The Rose are available!');
        });
        it("should return a flower", function () {
            assert.equal(flowerShop.checkFlowersAvailable('Orchid', gardenArr),
                'The Orchid are available!');
        });
        it("should say there are no flowers", function () {
            assert.equal(flowerShop.checkFlowersAvailable('none', gardenArr),
                `The none are sold! You need to purchase more!`);
        });
    });
    describe("sellFlowers", function () {
        let gardenArr = ["Rose", "Lily", "Orchid"];
        it("should remove a flower", function () {
            assert.equal(flowerShop.sellFlowers(gardenArr, 2),
                'Rose / Lily');
        });
        it("should throw errors on incorrect input", function () {
            assert.Throw(() => flowerShop.sellFlowers('begonia', 2.5, 2),
                'Invalid input!');
        });
        it("should throw errors on incorrect input", function () {
            assert.Throw(() => flowerShop.sellFlowers('begonia', 2),
                'Invalid input!');
        });
        it("should throw errors on incorrect input", function () {
            assert.Throw(() => flowerShop.sellFlowers(2, ''),
                'Invalid input!');
        });

    });

});
