import Link from 'next/link';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Black Rock Visuals</h2>
          <p>Black Rock Visuals — Freezing Time, Framing Stories.</p>
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
          <p>Email: BlackRockVisuals@gmail.com</p>
          <p>Location: Al Khobar, KSA</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/blackrockvisuals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-facebook-f"></i>Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <Link href="/">Black Rock Visuals</Link> — Managed & Powered by <a href="https://alphatechit.dev" target="_blank" rel="noreferrer">AlphaTech</a></p>
      </div>
    </footer>
  );
};

export default Footer;
