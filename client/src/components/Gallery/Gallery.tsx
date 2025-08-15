import Image from "next/image";
import { GalleryDataType } from "../Types/GalleryData.types";
import './Gallery.css';



const Gallery = ({galleryData}:{galleryData:GalleryDataType}) => {


    return (
        <div className="gallery-page">
            <h1>Weddings Gallery</h1>
            {galleryData.wedding.map((item, index)=> (
                
                <div key={index} className="shoot-box" id="wedding">
                    <h2>{item.shootTitle}</h2>
                    <p>{item.shootDetails}</p>
                    <div className="image-section">
                    {item.shootImages.map((item, index) => (
                            <div className="image-box" key={index}>
                            <Image src={item} alt="Image" height={200} width={200} className="sh-image"/>
                            </div>
                        
                    ))}
                    </div>
                </div>
            ))}

            <h1>Events Gallery</h1>
            {galleryData.event.map((item, index)=> (
                <div key={index} className="shoot-box" id="event">
                    <h2>{item.shootTitle}</h2>
                    <p>{item.shootDetails}</p>
                    <div className="image-section">
                    {item.shootImages.map((item, index) => (
                        <div className="image-box" key={index}>
                            <Image src={item} alt="Image" height={200} width={200} className="sh-image"/>
                        </div>
                    ))}
                    </div>
                </div>
            ))}

            <h1>Cars (Automotive)</h1>
            {galleryData.auto.map((item, index) => (
                <div key={index} className="shoot-box" id="auto(cars)">
                    <h2>{item.shootTitle}</h2>
                    <p>{item.shootDetails}</p>
                    <div className="image-section">
                        {item.shootImages.map((item, index) => (
                            <div className="image-box" key={index}>
                                <Image src={item} alt="Image" height={200} width={200} className="sh-image"/>
                                </div>
                        ))}
                        </div>
                </div>
            ))}
            <h1>Nature (Outdoor, Sky & Mountains)</h1>
            {galleryData.nature.map((item, index) => (
                <div key={index} className="shoot-box" id="nature">
                    <h2>{item.shootTitle}</h2>
                    <p>{item.shootDetails}</p>
                    <div className="image-section">
                        {item.shootImages.map((item, index) => (
                            <div className="image-box" key={index}>
                                <Image src={item} alt="Image" height={200} width={200} className="sh-image"/>
                                </div>
                        ))}
                        </div>
                </div>
            ))}
            <h1>Outdoor (Outdoor, Street & Drive)</h1>
            {galleryData.outdoor.map((item, index) => (
                <div key={index} className="shoot-box" id="outdoor">
                    <h2>{item.shootTitle}</h2>
                    <p>{item.shootDetails}</p>
                    <div className="image-section">
                        {item.shootImages.map((item, index) => (
                            <div className="image-box" key={index}>
                                <Image src={item} alt="Image" height={200} width={200} className="sh-image"/>
                                </div>
                        ))}
                        </div>
                </div>
            ))}
        </div>
    )
};

export default Gallery;