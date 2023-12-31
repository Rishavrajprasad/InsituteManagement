import mongoose from "mongoose";

const facultysalarylistingSchema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        branchselect:{
            type:String,
            required:true,
        },
        postselect:{
            type:String,
            required:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        month:{
            type:String,
            required:true,
        },    
        
    },{timestamps : true}
)

const Listing = mongoose.model('facultysalary', facultysalarylistingSchema);

export default Listing;
