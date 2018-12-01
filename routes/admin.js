const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const data = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    data.push(req.body);
    res.redirect('/');
})

exports.routes = router;
exports.products = data