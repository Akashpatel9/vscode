var express = require('express');
var router = express.Router();


const fs = require('node:fs');

const folders = "EXPLORER_VSCODE";




/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readdir(`${folders}`,{withFileTypes : true},function(err,files){
    res.render('index',{files,folders});
  });

});

router.get('/cretefiles', function(req, res, next) {
  fs.writeFile(`${folders}/${req.query.createfileinput}`,"",(err)=>{
    res.redirect('/');
  })
});

router.get('/cretefolder', function(req, res, next) {
  fs.mkdir(`${folders}/${req.query.createfolderinput}`,(err)=>{
    res.redirect('/');
  })
});

router.get('/delete/file/:filename',function(req,res,next){
  fs.unlink(`${folders}/${req.params.filename}`,(err)=>{
    res.redirect('/');
  })
})

router.get('/delete/folder/:filename',function(req,res,next){
  fs.rmdir(`${folders}/${req.params.filename}`,(err)=>{
    res.redirect('/');
  })
})

module.exports = router;
