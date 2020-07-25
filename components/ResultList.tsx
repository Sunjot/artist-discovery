import styles from '../Stylesheets/ResultList.module.scss';
import React, { useState, useEffect, useRef} from 'react';
import GenreList from './GenreList';
import ArtistList from './ArtistList';

interface IProps {
  value: string,
  option: string
}

const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
 
const ResultList = ({value, option, ...props}: IProps) => {

  return(
    <React.Fragment>
      {option === 'genre' && <GenreList value={value} usePrevious={usePrevious} />}
      {option === 'artist' && <ArtistList value={value} usePrevious={usePrevious}/>}
    </React.Fragment>
  )
}

export default ResultList;