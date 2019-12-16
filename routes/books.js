var express = require('express');
var Book = require('../models/book');
var router = express.Router();
const multer = require('multer');



router.get('/', function(req, res){
    console.log('getting all books');
    Book.find({}).exec(function(err, books){
        if(err) {
            res.send('error has occured');
        } else {
            res.json(books);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    Book.findOne({
        _id: req.params.id
    }).exec(function(err, book){
        if(err) {
            res.send('error has occured');
        } else {
            res.json(book);
        }
    });
});

router.post('/', function(req, res){
    var newBook = new Book();
    newBook.name = req.body.name;
    newBook.publisher = req.body.publisher;
    newBook.date = req.body.date;
    newBook.noofplayers = req.body.noofplayers;
    newBook.platform = req.body.platform;
    newBook.genre = req.body.genre;
    newBook.artbox = req.body.artbox;
    newBook.save(function(err, book){
        if(err) {
            res.status(400).send(err) 
            // res.send('error saving book', err);
        } else {
            res.send(book);
        }
    });
});

router.put('/:id', function(req, res){
    Book.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category
        }
    },{
        upsert: true
    },function(err, newBook){
        if(err) {
            res.send('error updating book');
        } else {
            console.log(newBook);
            res.send(newBook);
        }
    });
});

router.delete('/:id', function(req, res){
    Book.findByIdAndRemove({
        _id: req.params.id
    },function(err, book){
        if(err) {
            res.send('error deleting book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

module.exports = router;