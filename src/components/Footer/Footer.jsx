import { DISPLAY_PHONE, PHONE_NUMBER } from "../../utils/content";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h2>Quick Links</h2>
          <a href="#top">Home</a>
          <a href="#top">Book a Free Scan</a>
          <a href="#faq">How it Works</a>
          <a href="#top">Range of Aligners</a>
          <a href="#top">Aligners vs Braces</a>
        </div>
        <div>
          <h2>Get in Touch Now!</h2>
          <a href={`tel:${PHONE_NUMBER}`}>
            <span aria-hidden="true">☎</span> {DISPLAY_PHONE}
          </a>
          <a href="mailto:support@whistle.in">
            <span aria-hidden="true">✉</span> support@whistle.in
          </a>
        </div>
        <div>
          <h2>Follow us on</h2>
          <div className="socials">
            <a href="https://www.instagram.com" aria-label="Instagram">
              ◎
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              f
            </a>
            <a href="https://www.x.com" aria-label="X">
              𝕏
            </a>
          </div>
        </div>
        <div>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>
      <div className="sticky-book">
        <strong>Ready for your perfect smile?</strong>
        <a className="button button--primary" href="#top">
          Book scan at Home
        </a>
        <a className="button button--ghost" href="#top">
          Book scan at Clinic
        </a>
      </div>
    </footer>
  );
}
export default Footer;
