import React from 'react'
const Home = () => {
  return (
    <div className='hero-container'>
      <div className="hero-left">
        <h1>Hello, i m <br/> <span>Mohan Kumar</span></h1>
        <p>🚀 Frontend Developer | Learning the MERN Stack</p>
        <p className='highlight'>Building dynamic UIs with ReactJS</p>
        </div>
        <div className="hero-right">
          <div className="code-box">
            <p><span className='keyword'>const</span> Developer</p>
            <p>&nbsp;&nbsp;name: <span className="string">'Mohan Kumar'</span>,</p>
          <p>&nbsp;&nbsp;role: <span className="string">'Frontend Developer'</span>,</p>
          <p>&nbsp;&nbsp;learning: <span className="string">'MERN Stack'</span></p>
          <p>&#125;</p>
          <p className="cursor">|</p>
          </div>
        </div>
      </div>
  )
}

export default Home
