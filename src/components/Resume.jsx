import React from "react";
// import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
  {
    yearRange: "2023 - 2027",
    title: "B.Tech in Computer Science",
    place: "Galgotias College of Engineering and Technology, Greater Noida",
    desc: "Pursuing a Bachelor of Technology in Computer Science with a strong focus on software engineering, system design, and AI-driven applications. Relevant coursework includes Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, and Computer Networks. Actively involved in technical leadership as Tech Club Head, where I organized and led Python and Git workshops for 50+ students, promoting collaborative learning and hands-on development.",
  },
  {
    yearRange: "2022 - 2023",
    title: "Senior Secondary (Class 12 - CBSE)",
    place: "Central Academy, Prayagraj, India",
    desc: "Completed Class 12 with Physics, Chemistry, Mathematics, and Computer Science. Achieved an overall score of 81%, with a strong performance in Computer Science scoring 96/100. Developed a solid foundation in programming fundamentals, problem-solving, and logical thinking.",
  },
  {
    yearRange: "2020 - 2021",
    title: "Secondary (Class 10 - CBSE)",
    place: "Central Academy, Prayagraj, India",
    desc: "Completed Class 10 with an overall score of 92%. Built a strong academic foundation across core subjects including Mathematics and Science, which sparked early interest in technology and engineering.",
  },
];

  const projectDetails = [
    {
      yearRange: "2024",
      title: "Lost & Found Campus App (GIH'24 - 3rd Place)",
      place: "MERN Stack",
      desc: (
        <ul className="mb-0 list-unstyled">
          <li>• Built a MERN stack platform serving 3,000+ students</li>
          <li>• Designed secure REST APIs for authentication & item tracking</li>
          <li>• Improved item recovery rates by 35%</li>
          <li>• Worked in a fast-paced 24-hour hackathon environment</li>
        </ul>
      ),
    },
    {
      yearRange: "",
      title: "RESTful Note-Taking API",
      place: "Express.js, MongoDB",
      desc: (
        <ul className="mb-0 list-unstyled">
          <li>• Developed backend using Express.js and MongoDB</li>
          <li>• Implemented secure CRUD operations</li>
          <li>• Wrote unit tests ensuring reliability and error handling</li>
        </ul>
      ),
    },
    {
      yearRange: "",
      title: "Generative Text-to-Image Model",
      place: "AI, Diffusion Models",
      desc: (
        <ul className="mb-0 list-unstyled">
          <li>• Built diffusion-based AI model for text-to-image generation</li>
          <li>• Improved output quality using prompt engineering</li>
          <li>• Optimized latent space representations</li>
        </ul>
      ),
    },
    {
      yearRange: "",
      title: "Facial Recognition System",
      place: "OpenCV, TensorFlow",
      desc: (
        <ul className="mb-0 list-unstyled">
          <li>• Developed using OpenCV & TensorFlow</li>
          <li>• Achieved 85%+ accuracy</li>
          <li>• Used Siamese Neural Networks for classification</li>
        </ul>
      ),
    },
  ];

  const skills = [
    {
      name: "Core Skills",
      desc: "Data Structures & Algorithms, System Design, Debugging, Agile Development",
    },
    {
      name: "Programming Languages",
      desc: "Python, JavaScript (ES6+), C++, C, SQL",
    },
    {
      name: "Web Development",
      desc: "React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS",
    },
    {
      name: "AI & ML",
      desc: "Generative AI, LLMs, Prompt Engineering, TensorFlow, OpenCV",
    },
    {
      name: "Cloud & Tools",
      desc: "AWS (Fundamentals), Docker, Git/GitHub, Postman, Jest, Mocha",
    },
    {
      name: "Databases",
      desc: "MongoDB, MySQL, PostgreSQL",
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} {value.yearRange && `/ ${value.yearRange}`}
                    </p>
                    <div className="text-muted">{value.desc}</div>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Projects */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Projects</h2>
            <div className="border-start border-2 border-primary ps-3">
              {projectDetails.length > 0 &&
                projectDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} {value.yearRange && `/ ${value.yearRange}`}
                    </p>
                    <div className="text-muted">{value.desc}</div>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}
                </p>
                <p className="text-muted mb-4">{skill.desc}</p>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1s81054wM4zkoM6oYcl5D_sWePYcf09Us/view?usp=sharing"
          >
            View My Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
