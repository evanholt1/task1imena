// npm imports
const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// file imports
const router = require('./routes/router');

const app = express();
dotenv.config();
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_CONNECT,{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(router);
  

  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT,console.log(`Server started on port ${PORT}`));
})
.catch(err=>res.send("Database Error Occured. Please Try Again Later."));



