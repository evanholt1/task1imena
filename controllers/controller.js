// file imports
const Product = require('../models/Product');

exports.get_root = (req,res)=> {
  // const product = new Product({
  //   name:"Test",
  //   price:5
  // });
  // product.save()
  // .then(()=> {
  //   res.send("Works.Check DB");
  // });
  //res.send("HRE");
  res.render('index');
};

exports.post_root = (req,res)=> {
  Product.find().exec()
  .then((products)=> {
    res.render('index',{
    productList:products
    });
  });
  
};