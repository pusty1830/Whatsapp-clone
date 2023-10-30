import Conversation from "../modal/convomodel.js";

export const newConversation=async(req,res)=>{
    try {
       const senderId=req.body.senderId;
       const reciverId=req.body.reciverId;
       
       
       const exist=await Conversation.findOne({members:{$all:[reciverId,senderId]}});

       if(exist){
       return res.status(200).json("Convo already exist");
   
       }

       const newconversation=new Conversation({
        members:[senderId,reciverId]
       })
       await newconversation.save();
       return res.status(200).json("Convo saved successfully ");
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getConversation=async(req,res)=>{
    try {
        const senderId=req.body.senderId;
       const reciverId=req.body.reciverId;
      let convo= await Conversation.findOne({members:{$all:[reciverId,senderId]}}); 
      return res.status(200).json(convo);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error); 
    }
}