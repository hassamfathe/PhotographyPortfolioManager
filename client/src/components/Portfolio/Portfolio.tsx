"use client";
import { PortfolioDataType } from "../Types/PortfolioData.types";
import './Portfolio.css';
import Image from "next/image";
import { useEffect } from 'react';

const Portfolio = ({ portfolioData }: { portfolioData: PortfolioDataType }) => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.image-box, .service-box, .gallery-card, .testimonial-card');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="portfolio-page">
      
      {/* Hero */}
      <div className="portfolio-hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>{portfolioData.heading}</h1>
          <p>{portfolioData.subheading}</p>
        </div>
      </div>

      {/* Summary */}
      <section>
        <p>{portfolioData.summary}</p>
      </section>

      {/* Metrics */}
      <section>
        <h2>Our Achievements</h2>
        <div className="metrics-grid">
          <div className="metric"><strong>{portfolioData.metrics.totalProjects}</strong><span>Projects</span></div>
          <div className="metric"><strong>{portfolioData.metrics.totalClients}</strong><span>Clients</span></div>
          <div className="metric"><strong>{portfolioData.metrics.achievements}</strong><span>Awards</span></div>
          <div className="metric"><strong>{portfolioData.metrics.yearsActive}</strong><span>Years Active</span></div>
        </div>
      </section>

      {/* Offerings */}
      <section>
        <h2>What We Offer</h2>
        <div className="services-grid">
          {portfolioData.offerings.map((item, idx) => (
            <div className="service-box" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galleries */}
      <section>
        <h2>Our Work</h2>
        {portfolioData.galleries.map((gallery, idx) => (
          <div key={idx} className="gallery-section">
            <h3>{gallery.title}</h3>
            <p>{gallery.description}</p>
            <div className="gallery-grid">
              {gallery.photos.map((photo, pIdx) => (
                <div key={pIdx} className="image-box">
                  <Image src={photo} alt={gallery.category} width={300} height={200} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Feedback */}
      {portfolioData.feedback.length > 0 && (
        <section>
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {portfolioData.feedback.map((fb, idx) => (
              <div className="testimonial-card" key={idx}>
                <Image src={fb.profilePic} alt={fb.user} width={60} height={60} />
                <strong>{fb.user}</strong>
                <p>{fb.message}</p>
                <span>⭐ {fb.score}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <h2>{portfolioData.actionBlock.heading}</h2>
        <a href={portfolioData.actionBlock.buttonUrl} className="cta-button">
          {portfolioData.actionBlock.buttonLabel}
        </a>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact Us</h2>
        <p>📍 {portfolioData.contactDetails.location}</p>
        <p>📞 {portfolioData.contactDetails.phoneNumber}</p>
        <p>✉️ {portfolioData.contactDetails.emailAddress}</p>
        <p><a href={portfolioData.contactDetails.socialLink1} target="_blank">Social Link 1</a></p>
        <p><a href={portfolioData.contactDetails.socialLink2} target="_blank">Social Link 2</a></p>
        <p><a href={portfolioData.contactDetails.websiteUrl} target="_blank">Website</a></p>
      </section>

    </div>
  );
};

export default Portfolio;
