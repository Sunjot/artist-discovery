import styles from '../Stylesheets/Option.module.scss';
import React, { ComponentType } from 'react';

interface IProps {
  id?: string,
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  data?: string,
  text: string
  svg: any,
  svgWidth?: string,
  svgHeight?: string,
  svgStroke?: string
  style?: {}
}

const Option = ({id, handleClick, data, text, svg, svgWidth, svgHeight, svgStroke, style, ...props}: IProps) => {

  let SVG = React.cloneElement(svg, {
    width: svgWidth? svgWidth : undefined, height: svgHeight? svgHeight : undefined, 
    stroke: svgStroke? svgStroke : undefined
  });
  let optionID = id? styles[id] : "";

  return(
    <div id={optionID} className={styles.option} data-data={data} style={style? style : {}}
      onClick={handleClick? (e) => handleClick(e) : undefined}>
      <span>
        {SVG}
        {text}
      </span>
    </div>
  )
}

export default Option;