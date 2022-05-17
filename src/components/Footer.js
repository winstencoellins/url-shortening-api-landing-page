import React from 'react'
import insta from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import facebook from '../assets/images/icon-facebook.svg'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footerMain">
            <div>
                <h1 className="footerLogo">Shortly</h1>

            </div>

            <div className="info">
                <div className="infoFlex">
                    <p className="infoFlexTitle">Features</p>
                    <ul>
                        <li><a href="/" className="footerHover">Link Shortening</a></li>
                        <li><a href="/" className="footerHover">Branded Links</a></li>
                        <li><a href="/" className="footerHover">Analytics</a></li>
                    </ul>
                </div>

                <div className="infoFlex">
                    <p className="infoFlexTitle">Resources</p>
                    <ul>
                        <li><a href="/" className="footerHover">Blog</a></li>
                        <li><a href="/" className="footerHover">Developers</a></li>
                        <li><a href="/" className="footerHover">Support</a></li>
                    </ul>   
                </div>

                <div className="infoFlex">
                    <p className="infoFlexTitle">Company</p>
                    <ul>
                        <li><a href="/" className="footerHover">About</a></li>
                        <li><a href="/" className="footerHover">Our Team</a></li>
                        <li><a href="/" className="footerHover">Careers</a></li>
                        <li><a href="/" className="footerHover">Contact</a></li>
                    </ul>     
                </div>

                <div>
                    <ul className="socMed">
                        <li><img src={facebook} alt="facebook" /></li>
                        <li><img src={twitter} alt="twitter" /></li>
                        <li><img src={pinterest} alt="pinterest" /></li>
                        <li><img src={insta} alt="instagram" /></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer