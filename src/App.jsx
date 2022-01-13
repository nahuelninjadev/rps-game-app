import { useState } from 'react';
import './App.css';
import RulesButton from './components/RulesButton/RulesButton';
import Topbar from './components/Topbar/Topbar';
import Game from "./components/Game/Game";
function App() {
  const [score, setScore] = useState(12)
  return (
    <div className="App">
      <div className="container">
        <Topbar score={score}></Topbar>
        <Game></Game>
      </div>
      <RulesButton></RulesButton>
    </div>
  );
}

export default App;
