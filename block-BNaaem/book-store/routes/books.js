var express = require('express');

var router = express.Router();
var auth = require('../middlewares/auth');

router.get('/', (req, res, next) => {
    Book.find({}, (err, books) => {
        if(err) return next(err);
        res.status(200).json({books});
    })
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, book) => {
        if(err) return next(err);
        res.status(200).json({book});
    })
});

router.post('/', (req, res, next) => {
    Book.create(req.body, (err, book) => {
        if(err) return next(err);
        res.status(200).json({book});
    })
});

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, (err, book) => {
        if(err) return next(err);
        res.status(200).json({book});
    })
});

router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndDelete(id, (err, book) => {
        if(err) return next(err);
        res.status(200).json({book});
    })
});

module.exports = router;