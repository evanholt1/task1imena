//  npm imports
const fs = require('fs');
const { convertDeltaToHtml } = require('node-quill-converter');
const path = require('path');

exports.get_root = (req,res)=> {
  //res.render('index');
  //res.sendFile('homepage.html',{ root: path.join(__dirname,'../files') });
  let html;
  // fs.readFile(path.join(__dirname,'../files','homepage.txt'), 'utf8',(err,data)=> {
  //   html = data;
  //   console.log(html);
  //   res.render('homepage',{
  //     html:html
  //   });
  // });
  fs.readFile(path.join(__dirname,'../files','homepage.html'),(err,data)=> {
    html = data;
    res.render('homepage',{
      html:html
    });
  });
  
};

exports.get_editHomepage = (req,res)=> {
  res.render('newapi');
};

exports.post_saveHomePage = (req,res)=> {
  fs.writeFile(path.join(__dirname,'../files/homepage.html'),convertDeltaToHtml(req.body),function(err){
    if (err) throw err;
    console.log('Saved!');
  });
  // fs.writeFile(path.join(__dirname,'../files/homepage.txt'),JSON.stringify(req.body),function(err){
  //     if (err) throw err;
  //     console.log('Saved!');
  //   });
  res.end();
};

