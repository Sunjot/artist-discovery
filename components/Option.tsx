import styles from '../Stylesheets/Option.module.scss';
import React, { ComponentType } from 'react';

interface IProps {
  id?: string,
  handleClick?: (kind: string) => void,
  text: string
  svg: any,
  svgWidth?: string,
  svgHeight?: string,
  svgStroke?: string
  style?: {}
}

const Option = ({id, handleClick, text, svg, svgWidth, svgHeight, svgStroke, style, ...props}: IProps) => {

  let SVG = React.cloneElement(svg, {
    width: svgWidth? svgWidth : undefined, height: svgHeight? svgHeight : undefined, 
    stroke: svgStroke? svgStroke : undefined
  });
  let optionID = id? styles[id] : "";

  return(
    <div id={optionID} className={styles.option} style={style? style : {}}
      onClick={handleClick? () => handleClick(text) : undefined}>
      <span>
        {SVG}
        {text}
      </span>
    </div>
  )
}

export default Option;