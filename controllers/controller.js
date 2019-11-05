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

exports.post_productCreate = (req,res) => {
  const newProduct = new Product({
    name:req.body.name,
    price:req.body.price
  });
  newProduct.save()
  .then(()=>{
    res.send("Product Added");
  });
};

exports.put_productUpdate = (req,res)=> {
  let updatedName,updatedPrice;
  if(req.body.name.length !== 0) updatedName = req.body.name;
  if(req.body.price.length !== 0) updatedPrice = req.body.price;
  
  Product.findOne({name:req.body.oldName}).exec()
  .then((product)=> {
    if(updatedName)product.name=updatedName;
    if(updatedPrice)product.price=updatedPrice;
    product.save()
    .then(res.send("Product Updated"));
  });
  
};

exports.delete_productDelete = (req,res) => {
  Product.deleteOne({name:req.body.name}).exec()
  .then(res.send("Product Deleted"));
};