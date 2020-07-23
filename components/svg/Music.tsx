import styles from '../../Stylesheets/Icons.module.scss'

interface IProps {
  width?: string,
  height?: string,
  stroke?: string,
  handleClick?: () => void
}

const Music = ({width, height, stroke, handleClick, ...props} : IProps) => {
  return(
    <div onClick={handleClick} className={styles.music}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width={width? width : "40"} height={height? height : "40"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke? stroke : "rgb(228, 228, 228)"} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/><circle cx="6" cy="17" r="3" />
        <circle cx="16" cy="17" r="3" /><polyline points="9 17 9 4 19 4 19 17" /><line x1="9" y1="8" x2="19" y2="8" />
      </svg>
    </div>
  );
}

export default Music;