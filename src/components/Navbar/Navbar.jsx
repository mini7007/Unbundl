import { DISPLAY_PHONE, PHONE_NUMBER } from "../../utils/content";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="logo" href="#top" aria-label="Whistle home">
          <span>whistle</span>
          <small>AND SMILE</small>
        </a>
        <a
          className="phone-cta"
          href={`tel:${PHONE_NUMBER}`}
          aria-label={`Call ${DISPLAY_PHONE}`}
        >
          <span aria-hidden="true">☎</span>
          <span>{DISPLAY_PHONE}</span>
        </a>
      </nav>
    </header>
  );
}
export default Navbar;
