import "./RulesModal.css";
import closeIcon from "../../assets/images/icon-close.svg";
import ImageRules from "./ImageRules";
function RulesModal(props){
  return (
    <div className={`modal ${props.showModal ? '' : 'd-none'}`}>
      <div className="card"> 
        <div className="header">
          <span className="title">RULES</span>
          <img src={closeIcon} alt="icon-close.svg" onClick={props.onClick} />
        </div>
        <div className="body">
          <ImageRules></ImageRules>
        </div>
      </div>
    </div>
  )
}

export default RulesModal