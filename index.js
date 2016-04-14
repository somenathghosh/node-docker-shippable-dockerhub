'use strict';

const express = require('express');


// Constants
const PORT = 12021;

// App
const app = express();
app.get('/', function (req, res) {
   res.send('Hey Buddy...!!!');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);



