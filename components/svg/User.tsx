import styles from '../../Stylesheets/Icons.module.scss'

interface IProps {
  width?: string,
  height?: string,
  stroke?: string,
  handleClick?: () => void
}

const User = ({width, height, stroke, handleClick, ...props} : IProps) => {
  return(
    <div onClick={handleClick} className={styles.user}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={width? width : "40"} height={height? height : "40"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke? stroke : "rgb(228, 228, 228)"} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </div>
  );
}

export default User;