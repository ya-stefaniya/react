import { React, useState } from "react";
import './css/style.scss';
import { Header } from "./components/Header";
import { useLevel } from './hooks/useLevel';
import { useOptions } from './hooks/useOptions';
import { ButtonsStart } from "./components/ButtonsStart";
import { GameClassic } from "./components/GameClassic"
import { GameHard } from "./components/GameHard"

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const levels = useLevel();
  const options = useOptions();

  return (
    <Router>
      <div className="App" >
        <Header />

        {levels.level ? <Route path='/game-classic' render={() => <GameClassic level={levels.level} options={options.options} />} /> : ""}

        {levels.level ? <Route path='/game-hard' render={() => <GameClassic level={levels.level} options={options.options} />} /> : ""}

        {levels.level ? ' ' : <ButtonsStart {...levels} {...options} />}
      </div>
    </Router>
  );
}

export default App;