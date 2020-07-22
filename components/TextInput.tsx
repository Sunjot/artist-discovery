import { useState } from 'react';
import styles from '../Stylesheets/TextInput.module.scss';

interface IProps {
  placeholderName: string
}

const TextInput = ({placeholderName, ...props}: IProps) => {

  const [focusedInput, setFocusedInput] = useState(false);

  const focus = (focus: boolean) => {
    if (focus) setFocusedInput(true);
    else setFocusedInput(false);
  }

  return(
    <section id={styles.inputWrap}>
      <label className={styles.placeholder} style={focusedInput? {opacity: '0'} : {opacity: '0.5'}}>
        <span id={styles.searchText}>{placeholderName}</span>
      </label>
      <input className={styles.search} onFocus={() => focus(true)} onBlur={() => focus(false)}>
      </input>
    </section>
  )
}

export default TextInput;