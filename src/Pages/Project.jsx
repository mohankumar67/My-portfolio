import React from 'react';

const projects = [ 
  {
    title: "🎲 Dice Game",
    tech: "JavaScript",
    desc: "A fun dice game built using JavaScript that simulates the roll of two dice. Simple UI and logic-driven interactivity."
  },
  {
    title: "🌐 Interactive Animated Webpage",
    tech: "HTML, CSS, JavaScript, GSAP",
    desc: "Dynamic webpage built with GSAP animations. Smooth transitions, creative motion effects, and user interactions."
  },
  {
    title: "⛅ Weather App",
    tech: "HTML, CSS, JavaScript",
    desc: "Fetches real-time weather data based on user input. Displays temperature, humidity, wind speed, and weather conditions."
  },
  {
    title: "🧪 UsabilityHub Clone",
    tech: "HTML, CSS",
    desc: "A full website clone of UsabilityHub with a clean, sectioned layout for seamless user experience."
  },
  {
    title: "📷 Instagram Clone",
    tech: "React.js, CSS",
    desc: "Login page with auth UI and homepage showing posts with images, likes, and comments. Styled with CSS."
  },
  {
    title: "📚 OneStopLearn",
    tech: "HTML, CSS, JavaScript",
    desc: "A mini learning resource hub where students can explore and access online courses from different platforms."
  },
  {
    title: "🛒 Amazon.com Clone",
    tech: "HTML, CSS, JavaScript",
    desc: "A full homepage clone of Amazon with products, sections, and a clean responsive UI."
  },
  {
    title: "✊ Rock Paper Scissors Game",
    tech: "HTML, CSS, JavaScript",
    desc: "Classic Rock Paper Scissors game with smooth animations and logic for winning rounds."
  },
  {
    title: "💼 My Portfolio Website",
    tech: "React.js, React Router DOM",
    desc: "Personal portfolio showcasing skills, projects, and contact info. Built using React components and React Router for smooth navigation."
  }
];

const Project = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="tech-stack"><strong>Tech:</strong> {project.tech}</p>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
