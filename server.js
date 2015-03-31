var express = require('express');
var router = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var ClickCountModel = mongoose.model('ClickCountPaar', { id: String, clicks: Number });


router.get('/', function(req, res){
  res.sendfile('./client/index.html');
});

router.get('/js/jquery.min.js', function(req, res){
  res.sendfile('./client/js/jquery.min.js');
});

router.get('/incpoint', function(req, res){
  incrementID(req.query.id);
  res.send("Hallo Click");
});

router.get('/registerID', function(req, res){
  registerID(req.query.id);
  res.send("Herzlich willkommen, Button.");
});

router.get('/getclix', function(req, res){
  var idnow = req.query.id;
  var query = ClickCountModel.findOne({ 'id': idnow});
    query.select('clicks');
    query.exec(function(err, idno){
      if(err) return console.error(err);
      res.send(idno);
    });

});  
  

router.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Click Counter server listening at", process.env.IP + ":" + process.env.PORT);
});

function incrementID(idnow){
  var conditions = {  id: idnow }
  , update = { $inc: { clicks: 1 }}
  , options = { multi: false };
  ClickCountModel.update(conditions, update, options, callback);
  function callback (err, numAffected) {
     if(err) return console.error(err);
  console.log(numAffected + " affected");
  }
}

function registerID(idnow){
  console.log("register "+idnow);
  var neuerClick = new ClickCountModel( {  id: idnow, clicks: 1 });
  neuerClick.save();
  
}