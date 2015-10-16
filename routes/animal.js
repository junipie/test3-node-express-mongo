var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
})

router.route('/')

/* GET All Animals */
  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animals){
      if(err){
        res.send("Hey bear-fucker! Do you require assistance?");
      } else {
        console.log("Get is working")
        res.json(animals);
      }
    });
  })

  .post(function(req, res){
    var type = req.body.type;
    var name = req.body.name; 

    mongoose.model('Animal').create({
      type:type,
      name:name
    }, function(err, animal){
      if(err){
        res.send("Hey bear-fucker! Do you require assistance?");
      } else{
        res.json({message:'Animal created!'});
      }
    });
  });

module.exports = router;


