import mongoose from "mongoose";

const billslistingSchema = new mongoose.Schema(
    {
        billername:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        billtype:{
            type:String,
            required:true,
        },
        billamount:{
            type:Number,
            required:true,
        },
        month:{
            type:String,
            required:true,
        },    
        
    },{timestamps : true}
)

const Listing = mongoose.model('bills', billslistingSchema);

export default Listing;