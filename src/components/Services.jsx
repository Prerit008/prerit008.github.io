import React from "react";

const Services = () => {
  // services details
  const services = [
  {
    name: "Full-Stack Web Development",
    desc: "I build scalable and responsive web applications using React, Node.js, Express, and MongoDB.",
    icon: "fas fa-laptop-code",
  },
  {
    name: "Backend & API Development",
    desc: "Designing secure, efficient RESTful APIs with proper authentication, validation, and testing.",
    icon: "fas fa-server",
  },
  {
    name: "Generative AI Solutions",
    desc: "Working with LLMs, diffusion models, and prompt engineering to create intelligent AI systems.",
    icon: "fas fa-brain",
  },
  {
    name: "Cloud & DevOps",
    desc: "Experience with AWS fundamentals, Docker, and cloud-native application development.",
    icon: "fas fa-cloud",
  },
  {
    name: "Machine Learning & Computer Vision",
    desc: "Building models using TensorFlow and OpenCV, including facial recognition systems.",
    icon: "fas fa-robot",
  },
  {
    name: "System Design & Problem Solving",
    desc: "Strong foundation in DSA and system design for building optimized and scalable solutions.",
    icon: "fas fa-diagram-project",
  }
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
