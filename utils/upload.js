import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv';

dotenv.config();



const storage=new GridFsStorage({
  url:process.env.DB_URL,
  options:{useNewUrlParser: true, useUnifiedTopology: true} ,
  file:(request,file)=>{
    const match=["image/png","image/jpg"];

    if(match.indexOf(file.mimeType)===-1){
        return  
    }
  }
})