import styles from '../Stylesheets/Home.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useSwr from 'swr';

const MusicSVG = dynamic(() => import('./svg/Music'));
const UserSVG = dynamic(() => import('./svg/User'));
const InfoSVG = dynamic(() => import('./svg/Info'));
const TextInput = dynamic(() => import('./TextInput'));

const fetcher = (url: string) => fetch(url, {method: 'POST'}).then((res) => res.json())

const Home = () => {
  const router = useRouter();

  const [selection, setSelection] = useState({
    genre: styles.selected, 
    artist: styles.unselected, 
    genreStroke: "rgb(29, 29, 29)",
    artistStroke: "rgb(228, 228, 228)" });
  const [fadeout, setFadeout] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  const {data, error} = useSwr(fetchData? '/api/search' : null, fetcher);

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
    }, 300);
  }

  return(
    <div id={styles.home} className={fadeout? styles.fadeout : ""}>
      <InfoSVG handleClick={infoClick}/>
      <hgroup id={styles.titleWrap}>
        <h1 id={styles.titleLarge}>Artist Discovery</h1>
        <h2 id={styles.titleSmall}>Powered by Spotify</h2>
      </hgroup>
      <section id={styles.searchWrap}>
        <section id={styles.optionWrap}>
          <div id={selection.genre} className={styles.option} onClick={() => optionClick("genre")} style={{transform: 'translateX(1px)'}}>
            <span>
              <MusicSVG width="28" height="28" stroke={selection.genreStroke}/>
              Genre
            </span>
          </div>
          <div id={selection.artist} className={styles.option} onClick={() => optionClick("artist")}>
            <span>
              <UserSVG width="28" height="28" stroke={selection.artistStroke}/>
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