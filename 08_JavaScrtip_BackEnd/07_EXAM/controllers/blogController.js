const { createBlog, getById, update, deleteById, bookRoom } = require('../services/blogService');
const { parseError } = require('../util/parser');


const blogController = require('express').Router();

blogController.get('/:id/details', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner == req.user._id) {
        blog.isOwner = true;
    } 

    res.render('details', {
        title: 'Blog Details',
        blog
    });
});

blogController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create blog',
        user: req.user
    });
});

blogController.post('/create', async (req, res) => {
    const blog = {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        category: req.body.category,
        owner: req.user._id,
    }
    try {
        //check if the is some empty field
        if (Object.values(blog).some(x => !x)) {
            console.log(blog);
            throw new Error('All fields are required')
        }

        const result = await createBlog(blog)
        res.redirect('/')
    } catch (error) {
        res.render('create', {
            title: 'Create blog',
            body: blog,
            errors: parseError(error)
        });
    }
});

blogController.get('/:id/edit', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner != req.user._id) {
        return res.redirect('/auth/login')
    }
    res.render('edit', {
        titel: 'Edit blog',
        blog
    });
});

blogController.post('/:id/edit', async (req, res) => {
    const blog = await getById(req.params.id)
    if (blog.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    const edited = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        category: req.body.category,
    }

    try {
        //check if the is some empty field
        if (Object.values(edited).some(x => !x)) {
            throw new Error('All fields are required!')
        }
        
        if (edited.rooms > 100) {
            throw new Error('Rooms must be between 1 and 100')
        }

        if (edited.rooms < 1) {
    throw new Error('Rooms must be between 1 and 100')
}

const result = await update(req.params.id, edited)
res.redirect(`/blog/${req.params.id}/details`)
    } catch (error) {
    res.render('edit', {
        title: 'Edit blog',
        hotel: Object.assign(edited, { _id: req.params.id }),
        errors: parseError(error)
    });
}
});


blogController.get('/:id/delete', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    await deleteById(req.params.id);
    res.redirect('/')
});

blogController.get('/:id/book', async (req, res) => {
    const blog = await getById(req.params.id);

    try {
        if (blog.owner == req.user._id) {
            blog.isOwner = true;
            throw new Error('Cannot book your own blog!')
        }
        if (blog.bookings.map(b => b.toString()).includes(req.user._id.toString())) {
            blog.isBooked = true;
            throw new Error('Cannot book twice!')
        }
        await bookRoom(req.params.id, req.user._id)
        res.redirect(`/blog/${req.params.id}/details`)

    } catch (error) {
        res.render('details', {
            title: 'blog Details',
            blog,
            errors: parseError(error)
        });
    }



});

module.exports = blogController