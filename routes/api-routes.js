let db = require("../models");


module.exports = function (app) {

    
    app.get('/api/products', function (req, res) {
      db.Product.findAll({})
      .then(function(products){
          res.json(products)
      })
    });
  
    
    app.post('/api/products', function (req, res) {
      db.Product.create(req.body)
      .then(function(){
        console.log(req.body)
        res.json({ msg: "success" })
      })
    });
   
  }