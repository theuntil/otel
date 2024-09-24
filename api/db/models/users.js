const mongoose = require("mongoose");
 const schema = mongoose.Schema({
    email:String,
    password:String,
    is_active:Boolean,
    first_name:String,
    last_name:String,
    phone_number:String,


 },
 
 {timestamps:true
 })


 class users extends  mongoose.Model{
 }


 schema.loadClass(users);

 module.exports = mongoose.Model("users",schema);