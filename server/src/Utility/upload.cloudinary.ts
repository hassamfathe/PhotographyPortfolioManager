import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from '../config/cloudinary.config.ts';


export default async function uploadToCloudinary(buffer:Buffer, category:string, fileName:string) {

    return await new Promise((resolve, reject) => {
        cloudinary.uploader
        .upload_stream(
            {
                folder:`black-rock-visuals/${category}`,
                public_id:`${fileName}_${Date.now()}`,
                resource_type:'image'
            },
            (error, result) => {
                if(error) return reject(error);
                resolve(result);
            }
        )
        .end(buffer);
    })
    
}