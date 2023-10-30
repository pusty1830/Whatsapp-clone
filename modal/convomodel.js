import mongoose from "mongoose";


const convoSchema=new mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }
},
{
    timestamps:true
}

)

const Conversation=mongoose.model('conversation',convoSchema);

export default Conversation;