const Blog = require('../models/Blog')

async function getAll(){
    return Blog.find({}).lean()
}

async function createBlog(blog) {
    return Blog.create(blog)
}

async function getById(id) {
    return Ad.findById(id).populate('owner').lean()
}

async function deleteById(id) {
    return Ad.findByIdAndDelete(id)
}

async function editById(id, data) {
    const existing = await Ad.findById(id);
    existing.headline = data.headline
    existing.location = data.location
    existing.companyName = data.companyName
    existing.companyDescription = data.companyDescription
    return existing.save()
}

async function follow(adId, userId) {
    const existing = await Ad.findById(adId)
    existing.applied.push(userId);
    return existing.save()
}



async function getFollowers (userId) {
    return Blog.find({ wishingList: { $elemMatch: { $eq: userId } } }).lean()
}

module.exports = {
    getAll,
    createBlog,
    getById,
    editById,
    deleteById,
    follow,
    getFollowers
}