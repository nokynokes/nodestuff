var express = require('express'),
      http = require('http');

var app = express()
          .use(function(req,res,callback){ //register middleware
            res.end("hello express");
          });

//register with http
http.createServer(app)
    .listen(3000);
