const Toy = require("../models/Toy");
const User = require("../models/User");

async function getAll(){
    return Toy.find({}).lean();
}

async function getById(id){
    return Toy.findById(id).lean();
}

async function create(toy){
    return await Toy.create(toy)
}

async function buyToy(toyId, userId){
    const toy = await Toy.findById(toyId);

    toy.buyList.push(userId);

    await toy.save();
}

async function getByOwnerId(userId){
    return Toy.find({owner: userId}).lean();
}

async function getBoughtByUser(userId){
    return Toy.find({buyList: userId}).lean();
}

async function update(id, toy){
    const existing = await Toy.findById(id);

    existing.title = toy.title;
    existing.charity = toy.charity;
    existing.image = toy.image;
    existing.description = toy.description;
    existing.category = toy.category;
    existing.price = toy.price;


    await existing.save();
}

async function deleteById(id){
    await Toy.findByIdAndRemove(id)
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    buyToy,
    getByOwnerId,
    getBoughtByUser
}