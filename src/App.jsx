import { useState } from 'react';
import './App.css';
import RulesButton from './components/RulesButton/RulesButton';
import Topbar from './components/Topbar/Topbar';
import Game from "./components/Game/Game";
import RulesModal from "./components/RulesModal/RulesModal";
function App() {
  const [score, setScore] = useState(12);
  const [showModal, setShowModal] = useState(false);

  function toggleModal(){
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <div className="container">
        <Topbar score={score}></Topbar>
        <Game score={score} setScore={setScore}></Game>
      </div>
      <RulesButton onClick={toggleModal}></RulesButton>
      <RulesModal showModal={showModal} onClick={toggleModal}></RulesModal>
    </div>
  );
}

export default App;
