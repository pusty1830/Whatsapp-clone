import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    conversationId:  {
        type:String
    },
    senderId:  {
        type:String
    },
    reciverId:  {
        type:String
    },
    value:{
        type:String
    },
    type:{
        type:String
    }

},{
    timestamps:true
}
)

const message=mongoose.model('message',messageSchema);

export default message;