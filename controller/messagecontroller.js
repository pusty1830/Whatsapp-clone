import message from '../modal/message.js'
import Conversation from '../modal/convomodel.js';


export const newMessage=async(req,res)=>{
  try {
    const newmessage=new message(req.body);
    await newmessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});


    return res.status(200).json("Message sent successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export const getMessage=async(req,res)=>{
    try {
        const messages=await message.find({conversationId:req.params.id});
        return res.status(200).json(messages);
        
    } catch (error) {

        console.log(error);
    return res.status(500).json(error);
        
    }
}