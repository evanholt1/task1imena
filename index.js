// npm imports
const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// file imports

const app = express();
dotenv.config();



mongoose.connect(process.env.MONGO_CONNECT,{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{
  console.log("Database Connected");
  app.get('/',(req,res)=> {
    // const product = new Product({
    //   name:"Test",
    //   price:5
    // });
    // product.save()
    // .then(()=> {
    //   res.send("Works.Check DB");
    // });
    res.send("HERE");
  });
  
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT,console.log(`Server started on port ${PORT}`));
})
.catch(err=>res.send("Database Error Occured. Please Try Again Later."));



