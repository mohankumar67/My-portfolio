import React from 'react'

const About = () => {
  return (
   
    <div className="code-container">
      <p><span className="const">const</span> <span className="var">aboutMe</span> = &#123;</p>

      <div className="indent">
        <p className="key">name:</p>
        <p className="value">'Mohan Kumar',</p>
        <br/>
        <p className="key">role:</p>
        <p className="value">'Frontend Developer',</p>
        <br/>
        <p className="key">description:</p>
        <p className="value">
          'I’m a passionate developer focused on building visually appealing and highly functional web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I strive to deliver seamless user experiences.',
        </p>
        <br/>
        <p className="key">interests:</p>
        <p className="value">['Web Development', 'Cybersecurity', 'UI/UX', 'Open Source'],</p>
        <br/>
        <p className="key">currentlyLearning:</p>
        <p className="value">['MongoDB', 'Express.js', 'Node.js'],</p>
        <br/>
        <p className="key">tools:</p>
        <p className="value">['Git', 'GitHub', 'VS Code', 'Postman']</p>
      </div>

      <p>&#125;</p>
    </div>
  )
}

export default About
