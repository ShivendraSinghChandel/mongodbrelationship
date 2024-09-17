const express=require("express")
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/onetoonerelation").then(()=>{
    console.log("Database Connected");
})
const userroute=require("./route");
const cors=require("cors");
const bodyparser=require("body-parser");
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use("/user",userroute);

app.listen(8000,()=>{
    console.log("server running on port 8000");
})