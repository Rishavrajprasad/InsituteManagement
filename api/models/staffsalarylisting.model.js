import mongoose from "mongoose";

const staffsalarylistingSchema = new mongoose.Schema(
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

const Listing = mongoose.model('staffsalary', staffsalarylistingSchema);

export default Listing;
