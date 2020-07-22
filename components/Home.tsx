import styles from '../Stylesheets/Home.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const InfoIcon = dynamic(() => import('../components/InfoIcon'));
const TextInput = dynamic(() => import('../components/TextInput'));

const Home = () => {
  const router = useRouter();

  const [selection, setSelection] = useState({
    genre: styles.selected, 
    artist: styles.unselected, 
    genreStroke: "rgb(29, 29, 29)",
    artistStroke: "rgb(228, 228, 228)" });
  const [fadeout, setFadeout] = useState(false);

  const optionClick = (kind: string) => {

    if (kind === "genre" && selection.genre === styles.unselected) {
      setSelection({genre: styles.selected, artist: styles.unselected, genreStroke: "rgb(29, 29, 29)", artistStroke: "rgb(228, 228, 228)"});
    }
    if (kind === "artist" && selection.artist === styles.unselected) {
      setSelection({genre: styles.unselected, artist: styles.selected, genreStroke: "rgb(228, 228, 228)", artistStroke: "rgb(29, 29, 29)"});
    }
  }

  const infoClick = () => {
    setFadeout(true);
    
    setTimeout(() => {
      router.push('/about');
    }, 400);
  }

  return(
    <div id={styles.home} className={fadeout? styles.fadeout : ""}>
      <InfoIcon handleClick={infoClick} />
      <hgroup id={styles.titleWrap}>
        <h1 id={styles.titleLarge}>Artist Discovery</h1>
        <h2 id={styles.titleSmall}>Powered by Spotify</h2>
      </hgroup>
      <section id={styles.searchWrap}>
        <section id={styles.optionWrap}>
          <div id={selection.genre} className={styles.option} onClick={() => optionClick("genre")} style={{transform: 'translateX(1px)'}}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={selection.genreStroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/><circle cx="6" cy="17" r="3" />
                <circle cx="16" cy="17" r="3" /><polyline points="9 17 9 4 19 4 19 17" /><line x1="9" y1="8" x2="19" y2="8" />
              </svg>
              Genre
            </span>
          </div>
          <div id={selection.artist} className={styles.option} onClick={() => optionClick("artist")}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={selection.artistStroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              Artist
            </span>
          </div>
        </section>
        <TextInput placeholderName="Search" />
      </section>
    </div>
  );
}

export default Home; 