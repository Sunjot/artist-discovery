import styles from '../Stylesheets/ResultList.module.scss';
import { useState, useEffect, useRef} from 'react';

interface IProps {
  value: string
}

const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
 
const ResultList = ({value, ...props}: IProps) => {
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const prevValue = usePrevious(value);
  
  useEffect(() => {
    if (results.length === 0) {
      const fetchResults = async () => {
        let res = await fetch('/api/search', {method: 'POST'});
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
      { filtered.map((x) => {
        return <div>{x}</div>
      })}
    </div> 
  )
}

export default ResultList;