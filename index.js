var express=require('express'),
    app=express(),
    path=require('path'),
    mongoose=require("mongoose"),
    ejs=require('ejs');

require('./config/express')(app);
require('./config/routes')(app);

app.use(express.static(path.join(__dirname+ '/client')));
app.set('views',path.join(__dirname+ '/client/views'));
app.engine('html',ejs.renderFile);

(function() {
    mongoose.connect('mongodb://localhost:27017/swathidb',function(err){
    if(err){
      console.log("Could not connect to database");
    }
    else{
      console.log("Successfully connected to database!!!!!!!!!!!!!!");
      listen();
    }
  });
})();

function listen(){
  app.listen(9999,function(){
    console.log('Code Review app is listening at port 9999');
  });
}