const express = require('express');
const app = express();
const SongRouter = express.Router();

SongRouter.route('/').get(function (req, res) {
  res.render('index');
});

SongRouter.route('/test').get(function (req, res) {
    res.render('viewtest');
  });


SongRouter.route('/create').get(function (req, res) {
    res.render('create');
  });

module.exports = SongRouter;