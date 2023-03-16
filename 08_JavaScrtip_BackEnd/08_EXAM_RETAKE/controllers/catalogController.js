const { hasUser } = require('../middlewares/guard');
const { getAll, create, getById, buyToy, deleteById, update } = require('../services/toyService');
const { parseError } = require('../util/parser');

const catalogController = require('express').Router()

catalogController.get('/', async (req, res) => {
    const toys = await getAll();
    res.render('toys', {
        title: 'toys',
        toys
    })
})

catalogController.get('/:id/details', async (req, res) => {
    const toy = await getById(req.params.id);

    if (req.user) {
        if (toy.owner._id == req.user._id) {
            toy.isOwner = true;
        } else if (toy.buyList) {
            if (toy.buyList.map(f => f._id.toString()).includes(req.user._id.toString())) {
                toy.hasBought = true;
            }
            toy.buyers = toy.buyList.map(f => f.email).join(', ')
        }
        toy.isUser = true;
    }
    else {
        toy.isUser = false;
    }

    res.render('details', {
        title: 'Details',
        toy: Object.assign(toy, { owner: toy.owner.email })
    })
})

catalogController.get('/:id/buy', hasUser(), async (req, res) => {
    const toy = await getById(req.params.id);

    try {
        if (toy.owner._id == req.user._id) {
            toy.isOwner = true;
            throw new Error('Cannot buy your own toy')
        }
        if (toy.buyList.map(f => f._id.toString()).includes(req.user._id.toString())) {
            toy.hasJoined = true;
            throw new Error('Cannot buy toy twice')
        }

        await buyToy(req.params.id, req.user._id);
        res.redirect(`/toys/${req.params.id}/details`)
    } catch (error) {
        res.render('details', {
            title: 'Toy Details',
            toy: Object.assign(toy, { owner: toy.owner.email }),
            errors: parseError(error)
        })
    }
})

catalogController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Toy'
    })
})

catalogController.post('/create', hasUser(), async (req, res) => {
    const toy = {
        title: req.body.title,
        charity: req.body.charity,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        owner: req.user._id,
    }
    try {
        if (Object.values(toy).some(v => !v)) {
            throw new Error('All fields are required')
        }

        await create(toy);
        res.redirect('/toys')
    } catch (error) {
        res.render('create', {
            title: 'Create Toy',
            body: toy,
            errors: parseError(error)
        })
    }
})

catalogController.get('/:id/delete', hasUser(), async (req, res) => {
    const toy = await getById(req.params.id)

    if (toy.owner._id != req.user._id) {
        return res.redirect('/auth/login')
    }
    await deleteById(req.params.id);
    res.redirect('/toys')
})

catalogController.get('/:id/edit', hasUser(), async (req, res) => {
    const toy = await getById(req.params.id);

    if (toy.owner._id != req.user._id) {
        return res.redirect('/auth/login')
    }

    res.render('edit', {
        title: 'Edit Toy',
        toy
    })
})

catalogController.post('/:id/edit', hasUser(), async (req, res) => {
    const toy = await getById(req.params.id);

    if (toy.owner._id != req.user._id) {
        return res.redirect('/auth/login')
    }

    const edited = {
        title: toy.title,
        charity: toy.charity,
        price: toy.price,
        description: toy.description,
        category: toy.category,
        image: toy.image,
    }

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited)
        res.redirect(`/toys/${req.params.id}/details`)
    } catch (error) {
        res.render('edit', {
            title: 'Edit Toy',
            toy: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        })
    }
})

module.exports = catalogController;