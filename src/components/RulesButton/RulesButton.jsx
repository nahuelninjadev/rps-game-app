import './RulesButton.css';
function RulesButton(props){
  return(
    <button onClick={props.onClick} className="btn-rules">RULES</button>
  )
}

export default RulesButton;