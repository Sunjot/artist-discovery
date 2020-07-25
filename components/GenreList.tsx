import styles from '../Stylesheets/GenreList.module.scss';
import { useState, useEffect } from 'react';

interface IProps {
  value: string,
  usePrevious: Function
}

const GenreList = ({value, usePrevious, ...props}: IProps) => {
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const prevValue = usePrevious(value);
  
  useEffect(() => {
    if (results.length === 0) {
      const fetchResults = async () => {
        let res = await fetch('/api/search/genre', {method: 'POST'});
        let resJSON = await res.json();
        setResults(resJSON.genres);
        setFiltered(resJSON.genres.filter((genre: string) => genre.includes(value)));
      }
      fetchResults();
    }
    if (prevValue !== value) {
      setFiltered(results.filter((genre: string) => genre.includes(value)));
    }
  });

  return(
    <div className={styles.resultList}>
      <div className={styles.column}>
        { filtered.map((x, i) => {
          if (i%2 === 0)
            return <div key={i} className={styles.result}>{x}</div>
        })}
      </div>
      <div className={styles.column}>
      { filtered.map((x, i) => {
          if (i%2 === 1)
            return <div key={i} className={styles.result}>{x}</div>
        })}
      </div>
    </div>
  )
}

export default GenreList;