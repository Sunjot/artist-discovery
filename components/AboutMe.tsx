import styles from '../Stylesheets/AboutMe.module.scss';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CloseSVG = dynamic(() => import('./svg/Close'));

const AboutMe = () => {
  const router = useRouter();
  const [fadeout, setFadeout] = useState(false);

  const closeClick = () => {
    setFadeout(true);
    
    setTimeout(() => {
      router.push('/');
    }, 300);
  }

  return(
    <div id={styles.aboutMe} className={fadeout? styles.fadeout : ""}>
      <CloseSVG handleClick={closeClick}/>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.description}>
        <h2 className={styles.subtitle}>What Do I Do?</h2><br/>
        <p>Give you the ability to discover artists at random based on genre or similarity to another artist.
        You search for either and I'll query the Spotify database and generate
        a random profile.
        </p>
        <h2 className={styles.subtitle}>Can't you do this on Spotify?</h2><br/>
        <p>If you're searching by artist - yes, this is essentially just an expansion of the related artists 
          section. However, the search by genre feature also covers thousands of subgenres - something that
          isn't readily available on Spotify. 
        </p>
      </div>
    </div>
  );
}

export default AboutMe;