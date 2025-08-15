"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import cover1 from '../../../../public/BlackRockVisuals/WeddingCover.png';
import cover2 from '../../../../public/BlackRockVisuals/CarsStreets.png';
import './Hero.css';



const Hero = () => {

    const [currentCover, setCurrentCover] = useState(0);

    const slides = [
        weddingCover,
        carsCover
    ]
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCover((prev) => (prev+1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (

        <div className="hero" style={{backgroundImage:`url(${slides[currentCover].src})`}}>
            <div className="overlay"></div>
                <div className="content">
                     <h1 itemProp="Black Rock Visuals" itemScope >Black Rock Visuals</h1>
                      <p className="hero-tagline" itemProp="BassamShootsTagline">The Art of Seeing Through a Lens.</p>
                       <div className='hero-cta'>
                        <Link href="/Portfolio"><button>View Portfolio</button></Link>
                        </div>
            </div>
        </div>
    )
};

export default Hero;