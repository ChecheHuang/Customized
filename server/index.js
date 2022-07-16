const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
  });

app.listen(9000);


// const express = require('express')
// const path = require('path')
// const app = express()
// app.use(express.static(path.join(__dirname+"/public")))
// const PORT = process.env.PORT || 5000
// app.listen(PORT)
//https://create-react-app.dev/docs/deployment/