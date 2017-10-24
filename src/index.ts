import * as express from 'express';
import path = require('path');
import app from './App';

const port = 5000;

app.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }
  
    return console.log(`server is listening on ${port}`)
  })


