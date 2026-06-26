import BookingForm from "../BookingForm/BookingForm";
import "./Hero.css";
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1>Invisible Aligners for a dream smile</h1>
          <p>
            Book a Scan and avail a free
            <br />
            Orthodontist Consult <strong>worth ₹1500</strong>
          </p>
        </div>
        <div
          className="hero__portrait"
          role="img"
          aria-label="Smiling woman wearing clear aligners"
        />
      </div>
      <BookingForm />
    </section>
  );
}
export default Hero;
