import Gallery from "../models/gallery.ts";
import {GalleryDataType } from "../Types/gallery.types.ts";



class GalleryControllerUse {
    constructor() {

    }


    async updateGalleryFunction(data:GalleryDataType) {
        try {
            const updatedGallery = await Gallery.findOneAndUpdate(
                {},
                {$set:data},
                {upsert:true, new:true}
            );

            return {workFlag:true, updatedData:updatedGallery};
        } catch (error) {
            console.error("Error While Gallery Update, ",error);
            return {workFlag:false, updatedData:null};
        }
    }

    async fetchGalleryDataFunction() {
        try {
            const galleryData = await Gallery.find({});
            return {workFlag:true, data:galleryData};
        } catch (error) {
            console.error("Error While Fetching Gallery Data, ", error);
            return {workFlag:false, data:null};
        }
    }
};

export default GalleryControllerUse;