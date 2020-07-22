import styles from '../Stylesheets/AboutMe.module.scss';

const AboutMe = () => {
  return(
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.description}>
        <h2 className={styles.subtitle}>What Do I Do?</h2><br/>
        <p>Give you the ability to discover artists at random based on genre or similarity to another artist.</p>
        <h2 className={styles.subtitle}>How Do I Do It?</h2><br/>
        <p>You either search for a genre or an artist and I'll query the Spotify database for matches. 
        Whichever way you decide to go, I'll generate a random artist profile for you where you can
        go through their discography and preview songs. If you're not feeling it, you can easily 
        generate another profile.</p>
        <h2 className={styles.subtitle}>Can't you do this on Spotify?</h2><br/>
        <p>If you're searching by artist - yes, this is essentially just the related artists section.
         If you're searching by genre, you'll notice that you can look up nearly any subgenre 
        - something that isn't readily available on the Spotify app.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;