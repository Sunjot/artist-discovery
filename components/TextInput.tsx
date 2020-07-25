import { useState } from 'react';
import styles from '../Stylesheets/TextInput.module.scss';

interface IProps {
  placeholderName?: string,
  value?: string,
  handleValueChange?: (e: any) => any
}

const TextInput = ({placeholderName, value, handleValueChange, ...props}: IProps) => {

  const [focusedInput, setFocusedInput] = useState(false);

  const focus = (focus: boolean) => {
    if (focus || !focus && value && value.length > 0) setFocusedInput(true);
    else setFocusedInput(false);
  }

  return(
    <section id={styles.inputWrap}>
      <label className={styles.placeholder} style={focusedInput? {opacity: '0'} : {opacity: '0.5'}}>
        <span id={styles.searchText}>{placeholderName}</span>
      </label>
      <input className={styles.search} onFocus={() => focus(true)} onBlur={() => focus(false)}
        value={value} onChange={(e) => handleValueChange? handleValueChange(e) : null}>
      </input>
    </section>
  )
}

export default TextInput;