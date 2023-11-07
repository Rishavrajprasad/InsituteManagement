import mongoose from "mongoose";

const messcontractorlistingSchema = new mongoose.Schema(
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

const Listing = mongoose.model('messcontractor', messcontractorlistingSchema);

export default Listing;
