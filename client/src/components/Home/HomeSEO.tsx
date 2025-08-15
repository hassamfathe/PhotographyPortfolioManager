import './HomeSEO.css';
import Image from 'next/image';
import wpic1 from '../../../public/BlackRockVisuals/Wedding/WeddingHomePic.jpg';
import evpic1 from '../../../public/BlackRockVisuals/Events/EventHomePic.jpg';
import crpic1 from '../../../public/BlackRockVisuals/Cars/CarHomePic.jpg';
import oudrpic1 from '../../../public/BlackRockVisuals/Outdoor Lifestyle/397511860_1493917118107649_1325039573087242707_n.jpeg';
import naturepic1 from '../../../public/BlackRockVisuals/Nature/mountain.jpg';
import photographerPic from '../../../public/BlackRockVisuals/Admin:Owner/448692835_18441678793048292_1011046373441418477_n.jpg';

const HomeSEO = () => {





  return (
    <div className="home-pageSEO">

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

  <div className="service-item" style={{ backgroundImage: `url(${wpic1.src})` }}>
    <h1>Wedding Photography</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${evpic1.src})` }}>
    <h1>Event Coverage</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${crpic1.src})` }}>
    <h1>Automotive Shoots</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${oudrpic1.src})` }}>
    <h1>Outdoor Lifestyle Photography</h1>
  </div>
  <div className="service-item" style={{ backgroundImage: `url(${naturepic1.src})` }}>
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

export default HomeSEO;
