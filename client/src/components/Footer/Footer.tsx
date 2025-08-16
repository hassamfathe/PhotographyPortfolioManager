import Link from 'next/link';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Photographer Portfolio Manager</h2>
          <p>Photographer Portfolio Manager — Freezing Time, Framing Stories.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Portfolio">Our Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: PhotographerPortfolio@domain.com</p>
          <p>Location: Lahore , Pakistan</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com"><i className="fab fa-facebook-f"></i>Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <Link href="/">Photographer Portfolio Manager</Link> — Developed by <a href="https://alphatechit.dev/hassamfathe" target="_blank" rel="noreferrer">Hassam Fathe @ Alpha Tech</a></p>
      </div>
    </footer>
  );
};

export default Footer;
