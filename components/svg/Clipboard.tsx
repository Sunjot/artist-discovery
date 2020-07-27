import styles from '../../Stylesheets/Icons.module.scss'

interface IProps {
  width?: string,
  height?: string,
  stroke?: string,
  handleClick?: () => void
}

const Clipboard = ({width, height, stroke, handleClick, ...props} : IProps) => {
  return(
    <div onClick={handleClick} className={styles.clipboard}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width={width? width: "40"} height={height? height: "40"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke? stroke: "40"} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="9.01" y2="12" />
        <line x1="13" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="9.01" y2="16" />
        <line x1="13" y1="16" x2="15" y2="16" />
      </svg>
    </div>
  );
}

export default Clipboard;