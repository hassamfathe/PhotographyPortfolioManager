import express, { Request, Response } from 'express';
import uploadToCloudinary from '../Utility/upload.cloudinary.ts';
import parser from '../middleware/parser.ts';
const UploadEndpoint = express.Router();




UploadEndpoint.post('/upload-picture', parser.single('file'), async (req:Request, res:Response) => {
    try {
        const {category, file_name} = req.body;
        const fileBuffer = req.file?.buffer;
        if (!category || !file_name) {
            return res.status(400).json({ success: false, message: "Missing category or file_name" });
    }

    const result = await uploadToCloudinary(fileBuffer, category, file_name);

    res.status(200).json({ success: true, url: result.secure_url });
    } catch (error) {
        console.error("Error While Uploading Picture, ", error);
        res.status(500).json({ success:false, message: "Error While Uploading Picture" });
    }
});

export default UploadEndpoint;

