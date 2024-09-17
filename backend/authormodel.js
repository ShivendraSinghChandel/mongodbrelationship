const mongoose=require("mongoose");

const authorModel=new mongoose.Schema({
    authorname:String,
    books:[{type:mongoose.Schema.Types.ObjectId,ref:'book'}]

})

module.exports=mongoose.model("author",authorModel);