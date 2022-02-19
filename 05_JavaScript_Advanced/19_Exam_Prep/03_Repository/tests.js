let { Repository } = require("./solution.js");
let { assert } = require('chai');

describe("Tests …", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
   let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    describe("Initialisation", function () {
        it("should add props property on init", function () {
            let repository = new Repository(properties);
            assert.property(repository, 'props')
            assert.deepEqual(repository.props, properties)
        });
        it("should add property data on init", function () {
            let repository = new Repository(properties);
            assert.property(repository, 'data')
            assert.instanceOf(repository.data, Map)
        });
    });
    describe("get count ", function () {
        it("should count correctly", function () {
            let repository = new Repository(properties);
            repository.add(entity); // Returns 0
            repository.add(entity); // Returns 1
            assert.equal(repository.count, 2);
        });
    });
    describe("add function", function () {
        it("should count correctly", function () {
            let repository = new Repository(properties);
            repository.add(entity); // Returns 0
            
            assert.equal(repository.add(entity), 1);
        });
        it("should store valid entry", function () {
            let repository = new Repository(properties);
            repository.add(entity); // Returns 0
            assert.equal(repository.getId(0).name,'Pesho');
        });
        it("should throw error for missing type", function () {
            let entity = {
                name: "Pesho",
                age: 22,
            };
            let repository = new Repository(properties);
            assert.Throw(()=> repository.add(entity),`Property birthday is missing from the entity!`);
        });
        it("should throw error for wrong type", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: 'haho'
            };
            let repository = new Repository(properties);
            assert.Throw(()=> repository.add(entity),`Property birthday is not of correct type!`);
        });
    });

});
