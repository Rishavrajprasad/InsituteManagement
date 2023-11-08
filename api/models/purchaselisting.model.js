import mongoose from "mongoose";

const purchaselistingSchema = new mongoose.Schema(
    {
        itempur:{
            type:String,
            required:true,
        },
        dept:{
            type:String,
            required:true,
        },
        noitem:{
            type:Number,
            required:true,
        },
        tamt:{
            type:Number,
            required:true,
        },
        month:{
            type:String,
            required:true,
        },    
        
    },{timestamps : true}
)

const Listing = mongoose.model('purchase', purchaselistingSchema);

export default Listing;