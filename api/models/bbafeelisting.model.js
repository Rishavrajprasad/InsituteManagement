import mongoose from "mongoose";

const bbafeelistingSchema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true,
        },
        roll:{
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
        
        semester:{
            type:String,
            required:true,
        },
        fee:{
            type:Number,
            required:true,
        },
        month:{
            type:String,
            required:true,
        },    
        
    },{timestamps : true}
)

const Listing = mongoose.model('bbafee', bbafeelistingSchema);

export default Listing;
