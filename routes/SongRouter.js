const express = require('express');
const app = express();
const SongRouter = express.Router();
const Song = require('../models/Song.model');

SongRouter.route('/').get(function (req, res) {
    Song.find(function (err, songs){
        if(err){
            console.log(err);
        }
        else {
            res.render('index', {songs: songs});
        }
        });
    });


SongRouter.route('/').get(function (req, res) {
  res.render('index');
});

// SongRouter.route('/test').get(function (req, res) {
//     res.render('viewtest');
//   });


SongRouter.route('/create').get(function (req, res) {
    res.render('create');
  });



////////////POST ROUTE


SongRouter.route('/post').post(function (req, res) {
    const song = new Song(req.body);
    console.log(song);
    song.save()
    .then(song => {
    res.redirect('/songs');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


//////////////DISPLAY




module.exports = SongRouter;