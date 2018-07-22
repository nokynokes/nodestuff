var express = require("express"),
    bodyParse = require("body-parser");

var app = express()
    .use(bodyParse())
    .use(function (req, res) {
        if(req.body.foo){
          res.end("Foo found, value is : " + req.body.foo);
        }
        else{
          res.end("foo not found");
        }
    })
    .use(function (err, req, res, next){
      res.end('Invalid body!');
    })
    .listen(3000);
