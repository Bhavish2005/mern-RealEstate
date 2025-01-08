import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utilities/error.js";
import jwt from "jsonwebtoken";
export const signup= async(req,res,next)=>{
    const{username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashedPassword});
   try{
    await newUser.save()
   res.status(201).json("user Created ");
   } catch(error){
     next(errorHandler(550,"User Not Created"));
   }
    
};
export const signin= async(req,res,next)=>{
    const{email,password}=req.body;
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
         return next(errorHandler(404,"User Not Found"));
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,"Invalid Credentials"));
            
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        res.cookie("access_token",token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(validUser );
    } catch (error) {
        next(error);
    }
    
}