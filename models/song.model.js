const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema({
  name: {
    type: String
  },
  lyrics: {
     type: String
  }
},{
    collection: 'songs'
});

module.exports = mongoose.model('Song', Song);