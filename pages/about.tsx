import dynamic from 'next/dynamic';
import React from 'react';

const AboutMe = dynamic(() => import('../components/AboutMe'));

const About = () => {
  return(
    <React.Fragment>
      <AboutMe />
    </React.Fragment>
  );
}

export default About;