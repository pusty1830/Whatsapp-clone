import express from 'express';
import { adduser,getuser } from '../controller/usercontroller.js';
import { newConversation,getConversation } from '../controller/conversationcontroller.js';
import { newMessage ,getMessage} from '../controller/messagecontroller.js';
import { uploadFile } from '../controller/imagecontroller.js';
// import upload from '../utils/upload.js'

const route=express.Router();

route.post('/add',adduser);
route.get('/users',getuser);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);
route.post('/file/upload',uploadFile);
export default route;