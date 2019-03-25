const express = require('express');
const myParser = require('body-parser');
const app = express();
const url = require('url');
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");

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

//configure mailer
async function handleEmail(req,res){
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'angingenPortfolioMSG@gmail.com', // generated ethereal user
        pass: 'angingenMSG' // generated ethereal password
      }
    });

    var obj = req.body;
    // setup email data with unicode symbols
    let mailOptions = {
      from: 'angingenPortfolioMSG@gmail.com', // sender address
      to: 'jingwenwangw2@gmail.com', // list of receivers
      subject: 'Portfolio Site Message', // Subject line
      text: obj.name + '\n' + obj.email + '\n' + obj.message, // plain text body
    };
  
    // send mail with defined transport object
    await transporter.sendMail(mailOptions,function(err,info) {
        if (err) {
            console.log(err);
            res.json({errMess: 'error'});
        } else {
            console.log("Message sent.");
            res.json({yo: info.response});
        }
    });
}


router.post('/message',handleEmail);


app.listen(port, () => console.log('Listening on port',port));


