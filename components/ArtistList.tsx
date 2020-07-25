import styles from '../Stylesheets/ArtistList.module.scss';
import { useEffect, useState } from 'react';

interface IProps {
  value: string,
  usePrevious: Function
}

const ArtistList = ({value, usePrevious, ...props}: IProps) => {
  const [results, setResults] = useState([]);
  const prevValue = usePrevious(value);

  useEffect(() => {
    if (value !== prevValue) {
      const fetchResults = async () => {
        let res = await fetch('/api/search/artist', {
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({query: value})
        });
        let resJSON = await res.json();
        setResults(resJSON.artists.items)
      }
      fetchResults();
    }
  });

  return(
    <div className={styles.resultList}>
      <div className={styles.column}>
        { results.map((x: {name: string, images:[{url: string}]}, i) => {
          if (i%2 === 0) return ( 
            <div key={i} className={styles.result}>
              <img className={styles.artistPic} src={x.images[0]? x.images[0].url : "/noavatar.png"}/>
              <div className={styles.artistName}>{x.name}</div>
            </div>
          )})}
      </div>
      <div className={styles.column}>
      { results.map((x: {name: string, images:[{url: string}]}, i) => {
        if (i%2 === 1) return (
          <div key={i} className={styles.result}>
            <img className={styles.artistPic} src={x.images[0]? x.images[0].url: "/noavatar.png"}/>
            <div className={styles.artistName}>{x.name}</div>
          </div>
        )})}
      </div>
    </div>
  )
}

export default ArtistList;