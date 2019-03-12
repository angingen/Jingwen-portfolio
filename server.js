const express = require('express');
const myParser = require('body-parser');
const app = express();
const url = require('url');
const fs = require('fs');
const path = require('path');

// adding a router
const router = express.Router();
const port =  process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/build')));

// identification of allowed origins in CORS
const originWhitelist = ['https://randomtodolistgenerator.herokuapp.com/','http://localhost:3000'];

// middleware route that all requests pass through
router.use((request, response, next) => {
  console.log('Server info: Request received');
  
  let origin = request.headers.origin;
  
  // only allow requests from origins that we trust
  if (originWhitelist.indexOf(origin) > -1) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  // only allow get requests, separate methods by comma e.g. 'GET, POST'
  response.setHeader('Access-Control-Allow-Methods', 'GET','POST');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  
  // push through to the proper route
  next();
});

// from top level path e.g. localhost:8080, this response will be sent
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname = '/build/index.html'));
})

//  all routes prefixed with /api
app.use('/api',router);

app.use('/api',express.static('api'));

router.use(myParser.json());

// react router solution
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});


router.get('/projects',(req,res) => {
    var filename = './api/db.json';
    fs.readFile(filename, function(err,data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.json(JSON.parse(data));
    })
    console.log('read file in ',filename);
});



app.listen(port, () => console.log('Listening on port',port));


