import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What do you specialize in?",
      answer:
        "Full-stack web development and AI-powered applications.",
    },
    {
      question: "Can you work on AI projects?",
      answer:
        "Yes, I have hands-on experience with Generative AI, LLMs, and computer vision.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "MERN stack, TensorFlow, AWS, Docker, and modern JavaScript frameworks.",
    },
    {
      question: "Are you open to collaborations?",
      answer:
        "Absolutely! I enjoy working on innovative and impactful projects.",
    }

  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
