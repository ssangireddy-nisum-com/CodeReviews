var mongoose=require('mongoose'),
 	express = require('express'),
	path=require('path'),
	schemas=require('./schema');

module.exports=function(app){
	var Company=mongoose.model('Company',schemas.companySchema);
	var Org=mongoose.model('Org',schemas.orgSchema);
	var org=[new Org({orgName:"tech"}),new Org({orgName:"consult"})];
	var company=new Company
	            ({
	                _id:"osi",
	                companyName:"OSI",
	                orgs:org
	            });
	company.save(function(err){
	  if(err){
	    console.log("Could not save data");
	  }
	  else{
	    console.log("document inserted");
	    Company.find(function(err,doc) {
	      console.log(doc.length);
	      console.log(doc[0].companyName);
	      console.log(doc[0].orgs[0].orgName);
	    });
	  }
	});
};