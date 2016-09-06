var mongoose=require("mongoose"),
	Schema=mongoose.Schema,
	projectSchema,clientSchema,orgSchema,companySchema;

	projectSchema=new Schema({projectName:String},{_id:false});
	clientSchema=new Schema({clientName:String,projects:[projectSchema]},{_id:false});
	orgSchema=new Schema({orgName:String,clients:[clientSchema]},{_id:false});
	companySchema=new Schema({_id:String,companyName:String,orgs:[orgSchema]});

module.exports={
	projectSchema:projectSchema,
	clientSchema:clientSchema,
	orgSchema:orgSchema,
	companySchema:companySchema
};