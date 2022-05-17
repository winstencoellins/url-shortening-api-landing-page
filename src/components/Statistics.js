import React from 'react'
import time from '../assets/images/icon-detailed-records.svg';
import graph from '../assets/images/icon-brand-recognition.svg';
import tools from '../assets/images/icon-fully-customizable.svg';
import Card from './Card';
import './Statistics.css';
import ShortenLink from './ShortenLink';

function Statistics() {
  
  const title = {"graph": "Brand Recognition", "time": "Detailed Records", "tools": "Fully Customizable"}

  const desc = {"graph": "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.", "time": "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", "tools": "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}

  return (
    <div className="stats">
      <ShortenLink />
      <div className="statsMainContent">
        <div className="headTitle">
          <h3 className="statsHead">Advanced Statistics</h3>
          <p className="statsPar">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

        <div className="statsContent">
          <Card image={graph} title={title.graph} content={desc.graph} />
          <Card image={time} title={title.time} content={desc.time} />
          <Card image={tools} title={title.tools} content={desc.tools} />
        </div>
      </div>
    </div>
  )
}

export default Statistics