import triangle from '../../assets/images/bg-triangle.svg'
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import styles from './Game.module.css'
function Game() {
  return (
    <div className={styles['box-game']}>
      <img src={triangle} alt="triangle.svg" />
      <div className={styles['box-rock']}>
        <img className={styles.rock} src={rock} alt="rock.svg" />
      </div>
      <div className={styles['box-paper']}>
        <img className={styles.paper} src={paper} alt="paper.svg" />
      </div>
      <div className={styles['box-scissors']}>
        <img className={styles.scissors} src={scissors} alt="scissors.svg" />
      </div>
    </div>
  )
}

export default Game;