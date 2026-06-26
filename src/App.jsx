import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OfferStrip from "./components/OfferStrip/OfferStrip";
import Results from "./components/Results/Results";
function App() {
  return (
    <>
      <Navbar />
      <OfferStrip />
      <main>
        <Hero />
        <Results />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
export default App;
