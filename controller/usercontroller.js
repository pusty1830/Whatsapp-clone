import User from "../modal/User.js";
 
 export const adduser=async(req,res)=>{
  

    try {
      let exist=await User.findOne({sub:req.body.sub});
      if(exist){
         res.status(200).json({message:"user already exist"});
         return;

      }

      const newuser=new User(req.body);
      await newuser.save();
     return res.status(200).json(newuser);


    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
 } 

 export const getuser=async(req,res)=>{
    try {
     const users= await User.find({});
     return res.status(200).json(users);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
 
    }
 }