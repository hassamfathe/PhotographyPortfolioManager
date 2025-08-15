import express from 'express';
import GalleryControllerUse from '../controllers/gallery.controller.ts';

const GalleryEndpoint = express.Router();

GalleryEndpoint.post('/saveGalleryDataRouteName', async(req, res) => {
    try {
        const {data} = req.body;
        const GC = new GalleryControllerUse();
        const result = await GC.updateGalleryFunction(data[0]);
        if(!result.workFlag) {
            res.status(400).json(result);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error While save/update gallery function(endpoint), ", error);
        res.status(500).json({workFlag:false, updatedPortfolio:null})
    }
});


GalleryEndpoint.get('/fetchGalleryDataRouteName', async(req, res) => {
    try {
        const GC = new GalleryControllerUse();
        const result = await GC.fetchGalleryDataFunction();
        if(!result.workFlag) {
            res.status(400).json(result);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error While fetching gallery data function(endpoint), ", error);
        res.status(500).json({workFlag:false, data:null})
    }
});

export default GalleryEndpoint;







