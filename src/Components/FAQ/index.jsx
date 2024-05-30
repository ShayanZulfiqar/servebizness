import React, { useState, useEffect, useRef } from "react";

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index) => {
      if (index === activeIndex) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
    };
  
    return (
      <div className="container-faqs">
        <div className="container">
          <h2 className="text-center" data-aos="zoom-out">FAQs</h2>
          <p className="text-center mb-5">
            Find answers to common questions about our services, ordering process,
            and guarantees.
          </p>
          <div className="accordion">
            <div className="accordion-item p-1">
              <button
                id={`accordion-button-1`}
                data-aos="zoom-out"
                aria-expanded={activeIndex === 0 ? "true" : "false"}
                onClick={() => toggleAccordion(0)}
              >
                <span className="accordion-title">
                  What types of writing services do you offer?{" "}
                </span>
                <span className={`icon ${activeIndex === 0 ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content ${activeIndex === 0 ? "open" : "close"}`}
              >
                <p>
                  We specialize in a wide range of writing services, including
                  business reports, technical documentation, academic essays,
                  research papers, thesis writing, and much more. Whether you need
                  content for your business, assistance with technical manuals, or
                  support with academic assignments, we've got you covered.
                </p>
              </div>
            </div>
            <div className="accordion-item p-1">
              <button
                id={`accordion-button-2`}
                data-aos="zoom-out"
                aria-expanded={activeIndex === 1 ? "true" : "false"}
                onClick={() => toggleAccordion(1)}
              >
                <span className="accordion-title">
                How do you ensure the quality of the writing?{" "}
                </span>
                <span className={`icon ${activeIndex === 1 ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content ${activeIndex === 1 ? "open" : "close"}`}
              >
                <p>
                Quality is our top priority. We have a stringent quality assurance process in place, which includes thorough editing and proofreading by experienced professionals. Additionally, we employ plagiarism detection tools to ensure that all content is original and meets the highest standards of excellence.
                </p>
              </div>
            </div>

            <div className="accordion-item p-1">
              <button
                id={`accordion-button-3`}
                data-aos="zoom-out"
                aria-expanded={activeIndex === 2 ? "true" : "false"}
                onClick={() => toggleAccordion(2)}
              >
                <span className="accordion-title">
                What is your turnaround time for completing writing projects?{" "}
                </span>
                <span className={`icon ${activeIndex === 2 ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content ${activeIndex === 2 ? "open" : "close"}`}
              >
                <p>
                Turnaround times vary depending on the scope and complexity of the project. However, we strive to deliver high-quality work within the agreed-upon deadlines. We also offer expedited services for urgent projects, ensuring that you receive your content when you need it.
                </p>
              </div>
            </div>

            <div className="accordion-item p-1">
              <button
                id={`accordion-button-4`}
                data-aos="zoom-out"
                aria-expanded={activeIndex === 3 ? "true" : "false"}
                onClick={() => toggleAccordion(3)}
              >
                <span className="accordion-title">
                How do I place an order for writing services?{" "}
                </span>
                <span className={`icon ${activeIndex === 3 ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content ${activeIndex === 3 ? "open" : "close"}`}
              >
                <p>
                Placing an order is simple and straightforward. You can get started by filling out our online order form, providing details about your project requirements, deadlines, and any specific instructions. Once we receive your request, we'll promptly review it and assign a qualified writer to your project.
                </p>
              </div>
            </div>

            <div className="accordion-item p-1">
              <button
                id={`accordion-button-5`}
                data-aos="zoom-out"
                aria-expanded={activeIndex === 4 ? "true" : "false"}
                onClick={() => toggleAccordion(4)}
              >
                <span className="accordion-title">
                Who are your writers, and what are their qualifications?{" "}
                </span>
                <span className={`icon ${activeIndex === 4 ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content ${activeIndex === 4 ? "open" : "close"}`}
              >
                <p>
                Our writing team consists of highly skilled professionals with diverse backgrounds and expertise in various fields. Each writer undergoes a rigorous selection process and holds advanced degrees in their respective disciplines, ensuring that your projects are handled by knowledgeable experts.
                </p>
              </div>
            </div>
            {/* Add more accordion items here */}
          </div>
        </div>
      </div>
    );
};