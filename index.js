
var express = require('express');


// Constants
var PORT = 12021;

// App
var app = express();
app.get('/', function (req, res) {
   res.send('Hey Buddy...!!!');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);



