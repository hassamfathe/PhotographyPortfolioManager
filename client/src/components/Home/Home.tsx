"use client";
import './Home.css';
import Hero from './Hero/Hero';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {

    const router = useRouter();

    const moveToGallery = (sectionID:string) => {
        router.push(`/Gallery#${sectionID}`);
    }


   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, i * 150); // stagger effect
        }
      });
    },
    { threshold: 0.2 }
  );

  const sections = document.querySelectorAll('section, .service-item');
  sections.forEach((el) => observer.observe(el));

  return () => sections.forEach((el) => observer.unobserve(el));
}, []);


  return (
    <div className="home-page">
      <Hero />

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Capturing Moments That Matter</h2>
        <p>
          Welcome to my world of photography — where every frame tells a story, every detail is art,
          and your memories are preserved with passion. From weddings and events to automotive and fashion shoots, I aim to deliver timeless visuals.
        </p>
      </section>

      <section className="services-section">
  <h2>Services Offered</h2>

  <div className="service-item" style={{ backgroundImage: `url(${wpic1.src})` }} onClick={() => moveToGallery('wedding')}>
    <h1>Wedding Photography</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${evpic1.src})` }} onClick={() => moveToGallery('event')}>
    <h1>Event Coverage</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${crpic1.src})` }} onClick={() => moveToGallery('auto(cars)')}>
    <h1>Automotive Shoots</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${oudrpic1.src})` }} onClick={() => moveToGallery('outdoor')}>
    <h1>Outdoor Lifestyle Photography</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${naturepic1.src})` }} onClick={() => moveToGallery('nature')}>
    <h1>Nature Photography</h1>
  </div>
</section>


      {/* Why Choose Me Section */}
      <section className="why-me-section">
        <h2>Why Choose Me?</h2>
        <Image src={photographerPic} alt='PhotographerPic' height={200} width={200}/>
        <ul>
          <li>✔️ 5+ Years of Experience</li>
          <li>✔️ Award-winning Photographer</li>
          <li>✔️ High-quality Edits & Timely Delivery</li>
          <li>✔️ Customized Packages</li>
          <li>✔️ Client-Centric Approach</li>
        </ul>
      </section>

      

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Let’s Create Something Beautiful</h2>
        <p>Reach out now to book your shoot or inquire about packages.</p>
        <a href="/contact" className="cta-button">Book Now</a>
      </section>
    </div>
  );
};

export default Home;
