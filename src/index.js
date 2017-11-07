var express = require ('express');
var path = require('path');
var app = require('./app');

const port = 5000;

app.default.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }
  
    return console.log(`server is listening on ${port}`)
  })


