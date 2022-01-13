import LogoOriginal from "../../assets/images/logo.svg";
import styles from './Topbar.module.css';
function Topbar({score}){
  return ( 
    <div className={styles.topbar}>
      <img src={LogoOriginal} alt="" />
      <div className={styles['box-score']}>
        <p>SCORE</p>
        <h4>{score}</h4>
      </div>
    </div>
  )
}

export default Topbar