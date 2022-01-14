import triangle from '../../assets/images/bg-triangle.svg'
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import './Game.css';
function Game({score, setScore}) {
  return (
    <div className="box-game">
      <img src={triangle} alt="triangle.svg" />
      <div className="box-rock">
        <div>
          <img className="rock" src={rock} alt="rock.svg" />
        </div>
      </div>
      <div className="box-paper" onClick={() => setScore((score + 1))}>
        <div>
          <img className="paper" src={paper} alt="paper.svg" />
        </div>
      </div>
      <div className="box-scissors">
        <div>
          <img className="scissors" src={scissors} alt="scissors.svg" />
        </div>
      </div>
    </div>
  )
}

export default Game;