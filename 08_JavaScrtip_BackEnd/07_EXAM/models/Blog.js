const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i

const blogSchema = new Schema({
    title: { type: String, required: true, minlength: [5, 'Title must be at least 5 characters long!'], maxlength: [50, 'Title can be 50 characters max!'] },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL, must start with HTTP/HTTPS'
        }
    },
    content: { type: String, required: true, minlength: [10, 'Content must be at least 10 characters long!'] },
    category: {
        type: String, required: true, minlength: [3, 'Category must be at least 3 characters long!']
    },
    followList: {
        type: [Types.ObjectId], ref: 'User', default: []
    },
    owner: {
        type: Types.ObjectId, ref: 'User'
    },
});

// if title is unique

// blogSchema.index({ title: 1},{
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
//  } )


const Blog = model('Blog', blogSchema);

module.exports = Blog