import styles from '../../Stylesheets/Icons.module.scss'
import React from 'react';

interface IProps {
  width?: string,
  height?: string,
  stroke?: string,
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void 
  className?: string,
  data?: string
}

const Close = ({width, height, stroke, handleClick, className, data, ...props} : IProps) => {

  let iconClass = className? styles[className] : styles.close

  return(
    <div onClick={handleClick? (e) => handleClick(e) : undefined} className={iconClass} data-data={data}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width={width? width : "40"} height={height? height : "40"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke? stroke : "rgb(228, 228, 228)"} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg> 
    </div>
  );
}

export default Close;