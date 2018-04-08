const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(port, function(){
  console.log('songvault server running');
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });

 const CoinRouter = require('./routes/CoinRouter');

app.use('/coins', CoinRouter);