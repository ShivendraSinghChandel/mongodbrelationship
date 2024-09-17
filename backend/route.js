const express=require("express");
const route=express.Router();
const usercontroller=require("./controller");

route.post("/usersave",usercontroller.userSave);

route.get("/datadisplay",usercontroller.dataDisplay);


module.exports=route;