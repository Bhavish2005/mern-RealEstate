import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        
    },
   
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        
        
    },
    avatar:{
        type:String,
        defualt:"https://static.vecteezy.com/system/resources/thumbnails/048/334/475/small_2x/a-person-icon-on-a-transparent-background-png.png"
},
},
{timestamps:true});
const User =mongoose.model('User',userSchema);
export default User;