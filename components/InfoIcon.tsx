import styles from '../Stylesheets/InfoIcon.module.scss';

interface IProps {
  handleClick: () => void
}

const InfoIcon = ({handleClick, ...props}: IProps) => {
  return(
    <div onClick={handleClick} className={styles.infoIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(228, 228, 228)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
        <polyline points="11 12 12 12 12 16 13 16" />
      </svg>
    </div>
  );
}

export default InfoIcon;