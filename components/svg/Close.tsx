import styles from '../../Stylesheets/Icons.module.scss'

interface IProps {
  width?: string,
  height?: string,
  stroke?: string,
  handleClick?: () => void
}

const Close = ({width, height, stroke, handleClick, ...props} : IProps) => {
  return(
    <div onClick={handleClick} className={styles.close}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width={width? width : "40"} height={height? height : "40"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke? stroke : "rgb(228, 228, 228)"} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg> 
    </div>
  );
}

export default Close;