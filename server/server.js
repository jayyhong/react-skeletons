var express = require('express')
const path = require('path');
var bodyParser = require('body-parser')
var router = require('./router/router')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

// app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(8000, function(res, err){
  if(err) {
    console.log(err)
  }
  console.log('App now listening to 8000')
})