import mongoose from "mongoose";

const securitycontractorlistingSchema = new mongoose.Schema(
    {
        cname:{
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

const Listing = mongoose.model('securitycontractor', securitycontractorlistingSchema);

export default Listing;
