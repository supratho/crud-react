const express = require('express');
const router = express.Router();

const products = require('./Model');

router.post('/add', (req, res, next) => {
    const newProduct = new products(req.body);
    newProduct.save((err, products) => {
        if (err)
            res.json(err);
        else
            res.json({ msg: 'Inserted' });
    });
});

router.get('/', (req, res, next) => {
    products.find((err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    });
});

router.delete('/delete/:_id', (req, res, next) => {
    products.deleteOne({ _id: req.params._id }, (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send('Deleted');
    });
});

module.exports = router;