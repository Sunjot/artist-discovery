import styles from '../Stylesheets/Advanced.module.scss';
import dynamic from 'next/dynamic';

const CloseSVG = dynamic(() => import('./svg/Close'));

interface IProps {
  setAdvanced: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Advanced = ({setAdvanced}: IProps) => {
  return(
    <div className={styles.advanced}>
      <CloseSVG width="36" height="36" stroke="rgb(228, 228, 228)" 
        className="advancedClose" handleClick={setAdvanced} data="false" />
      <h2>Advanced Options</h2>
    </div>
  )
}

export default Advanced;