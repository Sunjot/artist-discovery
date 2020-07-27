import styles from '../Stylesheets/Home.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const MusicSVG = dynamic(() => import('./svg/Music'));
const UserSVG = dynamic(() => import('./svg/User'));
const InfoSVG = dynamic(() => import('./svg/Info'));
const ClipboardSVG = dynamic(() => import('./svg/Clipboard'));

const TextInput = dynamic(() => import('./TextInput'));
const ResultList = dynamic(() => import('./ResultList'));
const Option = dynamic(() => import('./Option'));

const Home = () => {
  const router = useRouter();

  const [selection, setSelection] = useState({
    genre: true, 
    artist: false});
  const [fadeout, setFadeout] = useState(false);
  const [value, setValue] = useState('');
  const [option, setOption] = useState('genre');

  const optionClick = (kind: string) => {

    if (kind === "Genre" && selection.genre === false) {
      setValue('');
      setSelection({genre: true, artist: false});
      setOption('genre');
    }
    if (kind === "Artist" && selection.artist === false) {
      setValue('');
      setSelection({genre: false, artist: true});
      setOption('artist');
    }
  }

  const infoClick = () => {
    setFadeout(true);
    
    setTimeout(() => {
      router.push('/about');
    }, 300);
  }

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  }

  const openAdvanced = () => {
    
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
          <Option 
            id={selection.genre? "selected": "unselected"} handleClick={optionClick}
            text="Genre" svg={<MusicSVG/>} svgWidth="28" svgHeight="28"
            svgStroke={selection.genre? "rgb(29, 29, 29)": "rgb(228, 228, 228)"}
            style={{'transform' : 'translateX(1px)'}}
          />
          <Option 
            id={selection.artist? "selected": "unselected"} handleClick={optionClick}
            text="Artist" svg={<UserSVG/>} svgWidth="28" svgHeight="28"
            svgStroke={selection.artist? "rgb(29, 29, 29)": "rgb(228, 228, 228)"}
          />
        </section>
        <TextInput value={value} handleValueChange={handleValueChange} placeholderName="Search" />
        <Option 
          id="advanced" handleClick={openAdvanced} 
          text="Advanced" svg={<ClipboardSVG/>} svgWidth="28" svgHeight="28"
          svgStroke="rgb(228, 228, 228)" style={{'transform' : 'translateX(-2px)', 'width' : '175px !important'}}
        />
      </section>
      {value.length > 0 && <ResultList value={value} option={option}/> }
    </div>
  );
}
export default Home; 