import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
       <div className="left">
           <div className="location">
             <FaHome size={20} style={{ color :
               "#fff", marginRight: "2rem"}}/>
               <div>
                 <p>No 100/25,New Moor Street</p>
                 <p>Mannar</p>
                 </div>
                 </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{ color :
                    "#fff", marginRight: "2rem"}}/>
                    +9476 533 2248 </h4>

                    <div className="email">
                    <h4><FaMailBulk size={20} style={{ color :
                        "#fff", marginRight: "2rem"}}/>
                         mjoyna4398@gmail.com </h4>
                </div>
                </div>
                </div>
                 

        <div className="right">
         <h4>About me</h4>
         <div className="social">
                <FaFacebook size={30} style={{ color :
                    "#fff", marginRight: "1rem"}}/>

                <FaGithub size={30} style={{ color :
                    "#fff", marginRight: "1rem"}}/>

                <FaLinkedin size={30} style={{ color :
                    "#fff", marginRight: "1rem"}}/>

                    <FaTwitter size={30} style={{ color :
                    "#fff", marginRight: "1rem"}}/>

                    </div>
        </div>
      </div>
    </div>
  )
}

export default Footer