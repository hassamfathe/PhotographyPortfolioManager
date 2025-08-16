"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import cover1 from '../../../../public/Cover1.jpg';
import cover2 from '../../../../public/Cover2.jpeg';
import './Hero.css';


const Hero = () => {

    const [currentCover, setCurrentCover] = useState(0);

    const slides = [
        cover1,
        cover2
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
                     <h1 itemProp="Black Rock Visuals" itemScope >Photographer Portfolio Manager</h1>
                      <p className="hero-tagline" itemProp="BassamShootsTagline"></p>
                       <div className='hero-cta'>
                        <Link href="/Portfolio"><button className="hero-cta-button">View Portfolio</button></Link>
                        </div>
            </div>
        </div>
    )
};

export default Hero;