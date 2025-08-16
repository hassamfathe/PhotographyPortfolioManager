"use client";

import { useEffect, useState } from "react";
import { GalleryDataType } from "../Types/GalleryData.types";
import mergeWith from 'lodash/mergeWith';
import axios from "axios";
import customMerge from "../Utility/CustomMerge";
import DynamicFormGallery from "../Utility/FormUse/RecurFormGallery";




const ManageGallery = () => {

    const [galleryData, setGalleryData] = useState<GalleryDataType>({
        wedding:[
            {shootTitle:"", shootDetails:"", shootImages:['']}
        ],
        event:[
            {shootTitle:"", shootDetails:"", shootImages:['']}
        ],
        auto:[
            {shootTitle:"", shootDetails:"", shootImages:['']}
        ],
        nature:[
            {shootTitle:"", shootDetails:"", shootImages:['']}
        ],
        outdoor:[
            {shootTitle:"", shootDetails:"", shootImages:['']}
        ]
    });

    useEffect(() => {
        const fetchGalleryData = async () => {
            try { 
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/galleryRoutes/fetchGalleryDataRouteName`);
                const fetched = response.data.galleryData;
                const merged = mergeWith({}, galleryData, fetched, customMerge);
                setGalleryData(merged);
            } catch (error) {
                console.error("Error While Fetching The Gallery Data, ", error);
            }
        }
        fetchGalleryData();
    }, []);

    const handleGallerySubmit = async (data:GalleryDataType) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/galleryRoutes/saveGalleryDataRouteName`, {data});
            if (response.data.success) {
                alert("Gallery Data Saved Successfully");
            }
        } catch (error) {
            console.error("Error While Saving The Gallery Data, ", error);

        }
    }

    return (
        <div className="manage-gallery-page">
            <div>
                <DynamicFormGallery<GalleryDataType>
                    initialData = {galleryData}
                    onSubmit={handleGallerySubmit}

                />
            </div>
        </div>
    )
};

export default ManageGallery;