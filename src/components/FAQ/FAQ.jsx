import { useState } from "react";
import { faqs } from "../../utils/content";
import "./FAQ.css";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2>
          <span>Got Questions?</span> We’ve got answers
        </h2>
        <div className="faq__list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <article className="faq__item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="faq__panel"
                  hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FAQ;
