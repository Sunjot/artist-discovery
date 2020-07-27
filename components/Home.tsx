import styles from '../Stylesheets/Home.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Advanced from './Advanced';

const InfoSVG = dynamic(() => import('./svg/Info'));

const ResultList = dynamic(() => import('./ResultList'));
const Search = dynamic(() => import('./Search'));

const Home = () => {
  const router = useRouter();

  const [fadeout, setFadeout] = useState(false);
  const [value, setValue] = useState('');
  const [option, setOption] = useState('genre');
  const [adv, setAdv] = useState('false');

  const handleOption = (type: string) => {
    setOption(type);
    setValue('');
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

  const setAdvanced = (e: React.MouseEvent<HTMLDivElement>) => {
    let setValue = e.currentTarget.dataset.data;
    if (setValue) setAdv(setValue);
  }

  return(
    <div id={styles.home} className={fadeout? styles.fadeout : ""}>
      {adv === 'true' && 
        <Advanced setAdvanced={setAdvanced}/>
      }
      <InfoSVG handleClick={infoClick}/>
      <hgroup id={styles.titleWrap}>
        <h1 id={styles.titleLarge}>Artist Discovery</h1>
        <h2 id={styles.titleSmall}>Powered by Spotify</h2>
      </hgroup>
      <Search handleOption={handleOption} handleValueChange={handleValueChange} 
        value={value} setAdvanced={setAdvanced} />
      {value.length > 0 && 
        <ResultList value={value} option={option}/> 
      }
    </div>
  );
}
export default Home; 