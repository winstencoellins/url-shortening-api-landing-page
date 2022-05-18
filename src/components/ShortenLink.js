import axios from 'axios';
import React, { useState } from 'react';
import './ShortenLink.css';

function ShortenLink () {

  var links = document.getElementById("links")
  
  const [userInput, setUserInput] = useState('');

  var URL = `https://api.shrtco.de/v2/shorten?url=${userInput}`;

  const getValue = (event) => {
    setUserInput(event.target.value);
  }

  const fetchAPI = () => {
    if (userInput !== '') { 
      axios.get(URL)
        .then(response => {
          // Creating button
          var btn = document.createElement("button")
          btn.setAttribute('class', 'btnShort')
          btn.innerHTML = "Copy"

          function modifyText () {
            btn.innerHTML = "Copied!";
            btn.style.backgroundColor = "hsl(260, 8%, 14%)";
            navigator.clipboard.writeText(response.data.result.full_short_link)
          }

          btn.addEventListener('click', modifyText)

          // Original Link
          var ori = document.createElement("p")
          ori.setAttribute('class', 'ori')
          ori.innerHTML = response.data.result.original_link 

          // Short Link
          var short = document.createElement("p")
          short.setAttribute("class", "short")
          short.innerHTML = response.data.result.full_short_link

          console.log(response.data)

          // Create list to be appended
          var li = document.createElement("li")
          li.setAttribute('class', 'shortenCardLink')
          li.appendChild(ori)
          li.appendChild(short)
          li.appendChild(btn)
          links.appendChild(li)
          setUserInput('');
        })
    }
  }

  return (
    <div className="shortenLink">
      <div className="shortenLinkContent">
        <input type="text" placeholder="Shorten a link here..." value={userInput} onChange={getValue} className="textBox" required/>
        <button className="buttonShortenLink buttonShortenMobile" onClick={fetchAPI}>Shorten It!</button>
      </div>

      <ul id="links"></ul>
    </div>
  )
}

 export default ShortenLink