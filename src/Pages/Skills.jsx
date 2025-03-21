
import React from 'react'

const Skills = () => {
  return (
    
    <div className="skills-wrapper">
    <h2 className="skills-heading">const <span className="highlight">skills</span> = {'{'}</h2>

    <div className="skills-block">
      <div className="skills-category">
        <p className="key">frontend:</p>
        <p className="value">[ 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS' ]</p>
      </div>
      <div className="skills-category">
        <p className="key">learning:</p>
        <p className="value">[ 'MongoDB', 'Express.js', 'Node.js' ]</p>
      </div>
      <div className="skills-category">
        <p className="key">tools:</p>
        <p className="value">[ 'Git', 'GitHub', 'VS Code', 'Postman' ]</p>
      </div>
    </div>

    <h2 className="skills-heading">{'}'}</h2>
  </div>
  )
}

export default Skills
