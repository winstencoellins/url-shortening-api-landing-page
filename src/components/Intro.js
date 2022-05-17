import React from 'react'
import './Intro.css';
import workingImage from '../assets/images/illustration-working.svg'

function Intro() {
  return (
    <div className="intro">
      <div className="introMainComponent">
        <div className="container">
          <h1 className="header">More than just shorter links</h1>
          <p className="paragraph">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="button">Get Started</button>
        </div>
        <img src={workingImage} alt="Working.svg" className="image"/>
      </div>
    </div>
  )
}

export default Intro