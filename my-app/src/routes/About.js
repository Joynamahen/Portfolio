import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';

const About = () => {
  return (
    <div>
     <Navbar />
     <Heroimg2 heading= "ABOUT." text="I'm a friendly front-end Developer" />
     <Footer />
    </div>
  )
}

export default About