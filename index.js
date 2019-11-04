const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECT,{useNewUrlParser:true,useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({
  name: String,
  price:Number
});

const Product = mongoose.model('Product',ProductSchema);

app.get('/',(req,res)=> {
  const product = new Product({
    name:"Test",
    price:5
  });
  product.save()
  .then(()=> {
    res.send("Works.Check DB");
  });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));