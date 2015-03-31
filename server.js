
var express = require('express');

var router = express();

router.get('/', function(req, res){
  res.sendfile('./client/index.html');
});

router.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Chat server listening at", process.env.IP + ":" + process.env.PORT);
});
