import dynamic from 'next/dynamic';
import styles from '../Stylesheets/Search.module.scss';
import {useState } from 'react';

const Option = dynamic(() => import('./Option'));
const TextInput = dynamic(() => import('./TextInput'));

const ClipboardSVG = dynamic(() => import('./svg/Clipboard'));
const MusicSVG = dynamic(() => import('./svg/Music'));
const UserSVG = dynamic(() => import('./svg/User'));

interface IProps {
  handleOption: (type: string) => void,
  handleValueChange: (e: any) => void,
  value: string,
  setAdvanced: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Search = ({handleOption, handleValueChange, value, setAdvanced, ...props}: IProps) => {

  const [selection, setSelection] = useState({
    genre: true, 
    artist: false});

  const optionClick = (e: React.MouseEvent<HTMLDivElement>) => {

    let kind = e.currentTarget.dataset.data;
    if (kind === "Genre" && selection.genre === false) {
      setSelection({genre: true, artist: false});
      handleOption("genre");
    }
    if (kind === "Artist" && selection.artist === false) {
      setSelection({genre: false, artist: true});
      handleOption("artist");
    }
  }

  return(
    <section id={styles.searchWrap}>
      <section id={styles.optionWrap}>
        <Option 
          id={selection.genre? "selected": "unselected"} handleClick={optionClick}
          text="Genre" svg={<MusicSVG/>} svgWidth="28" svgHeight="28" data="Genre"
          svgStroke={selection.genre? "rgb(29, 29, 29)": "rgb(228, 228, 228)"}
          style={{'transform' : 'translateX(1px)'}}
        />
        <Option 
          id={selection.artist? "selected": "unselected"} handleClick={optionClick}
          text="Artist" svg={<UserSVG/>} svgWidth="28" svgHeight="28" data="Artist"
          svgStroke={selection.artist? "rgb(29, 29, 29)": "rgb(228, 228, 228)"}
        />
      </section>
      <TextInput value={value} handleValueChange={handleValueChange} placeholderName="Search" />
      <Option 
        id="advanced" handleClick={setAdvanced} data="true"
        text="Advanced" svg={<ClipboardSVG/>} svgWidth="28" svgHeight="28"
        svgStroke="rgb(228, 228, 228)" style={{'transform' : 'translateX(-2px)', 'width' : '175px !important'}}
      />
    </section>
  )
}

export default Search;