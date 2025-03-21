import React from 'react'

const Contact = () => {
  return (
    
    <div className="code-container">
      <p><span className="const">const</span> <span className="var">contactMe</span> = &#123;</p>

      <div className="indent">
        <p className="key">email:</p>
        <p className="value">'mohankumarwork11@gmail.com',</p>

         <br/>
        <p className="key">location:</p>
        <p className="value">'India',</p>
        <br/>
        <p className="key">availableFor:</p>
        <p className="value">['Internships', 'Frontend Projects', 'Freelancing'],</p>
        <br/>
        <p className="key">connect:</p>
        <p className="value">
          [
          &nbsp;&nbsp;'<a href="https://github.com/mohankumar67" target="_blank" rel="noreferrer">GitHub</a>',
          &nbsp;&nbsp;'<a href="https://www.linkedin.com/in/mohan-kumar-6b776b353/" target="_blank" rel="noreferrer">LinkedIn</a>'
          ]
        </p>
      </div>

      <p>&#125;</p>
    </div>
  )
}

export default Contact
