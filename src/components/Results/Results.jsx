import { useProducts } from "../../hooks/useProducts";
import {
  comparisons,
  differenceItems,
  steps,
  whyCards,
} from "../../utils/content";
import SectionHeader from "../common/SectionHeader";
import "./Results.css";

function ProductCard({ product, index }) {
  return (
    <article className="result-card">
      <img
        src={product.thumbnail}
        alt={`${product.title} smile result`}
        loading="lazy"
      />
      <div className="result-card__split">
        <span>Before</span>
        <span>After</span>
      </div>
      <dl>
        <dt>Concern</dt>
        <dd>{product.category}</dd>
        <dt>Treatment Duration</dt>
        <dd>{8 + (index % 4)} months</dd>
      </dl>
    </article>
  );
}
function Results() {
  const { products, status, error } = useProducts();
  const featured = products[0];
  return (
    <>
      <section className="intro section-soft">
        <div className="container intro__grid">
          <div>
            <h2>
              Dream smiles
              <br />
              achieved secretly
            </h2>
            <p>
              Experience the superior quality of our Whistle Aligners crafted
              with 3-layer PU material. With 450+ clinics nationwide, enjoy
              comfortable treatment by expert orthodontists at House of Clove.
            </p>
            <p>
              The pricing is different for every case. Cases with higher
              complexity requiring more aligners and additional time and effort
              from our dentists.
            </p>
          </div>
          <article className="price-card">
            <h3>Whistle Aligners</h3>
            {featured && (
              <img
                src={featured.thumbnail}
                alt="Whistle aligner product"
                loading="lazy"
              />
            )}
            <s>₹84,000</s>
            <strong>starting at ₹47,999</strong>
            <small>inc. of all taxes</small>
            <ul>
              <li>Offer valid for a limited time</li>
              <li>Easy financing options</li>
            </ul>
            <a href="#faq">Learn more →</a>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="Results You’ll Love" />
          {status === "loading" && (
            <p className="state">Loading smile results…</p>
          )}
          {status === "error" && <p className="state state--error">{error}</p>}
          {status === "empty" && (
            <p className="state">No results available right now.</p>
          )}
          {status === "success" && (
            <div className="results-grid">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="Why Whistle?" />
          <div className="why-grid">
            {whyCards.map(([title, text], index) => (
              <article className="why-card" key={title}>
                <div className={`why-image why-image--${index}`}></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="difference section-soft">
        <div className="container difference__grid">
          <div className="difference__panel">
            <h2>The Whistle Difference</h2>
            {differenceItems.map(([title, text]) => (
              <article key={title}>
                <span aria-hidden="true">⌁</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div
            className="lab-image"
            role="img"
            aria-label="3D printed aligners in dental lab"
          ></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="What sets Whistle apart?" />
          <div className="compare" role="table" aria-label="Whistle comparison">
            <div className="compare__row compare__head">
              <strong>Features</strong>
              <strong>whistle</strong>
              <strong>Other Brands</strong>
            </div>
            {comparisons.map(([feature, whistle, other]) => (
              <div className="compare__row" role="row" key={feature}>
                <span>{feature}</span>
                <span>{whistle}</span>
                <span>{other}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="steps section-soft">
        <div className="container steps__card">
          <div>
            <h2>
              Get your perfect smile in
              <br />
              four simple steps
            </h2>
            <div className="steps__grid">
              {steps.map(([title, text], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="video-card"
            aria-label="Treatment process video preview"
          >
            <button type="button" aria-label="Play video">
              ▶
            </button>
          </div>
        </div>
      </section>
      <section className="doctor section-soft">
        <div className="container doctor__grid">
          <div>
            <h2>
              We are Doctor-led, not
              <br />
              direct-to-customers
            </h2>
            <p>
              We don’t offer direct-to-customer invisible aligners. We treat you
              in a Dental clinic with an Orthodontist.
            </p>
            <a className="button button--primary" href="#top">
              Get a Callback
            </a>
          </div>
          <div
            className="doctor-image"
            role="img"
            aria-label="Doctor in dental clinic"
          ></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="Happy Smilers!" />
          <div className="smilers">
            {products.slice(0, 5).map((product) => (
              <article key={product.id}>
                <img
                  src={product.images?.[0] || product.thumbnail}
                  alt={`${product.title} testimonial`}
                  loading="lazy"
                />
                <strong>HAPPY-MONIALS</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Results;
