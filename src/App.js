import { React, useState } from "react";
import './css/style.scss';
import { Header } from "./components/Header";
import { useLevel } from './hooks/useLevel';

import { ButtonsStart } from "./components/ButtonsStart";
import { GameEasy } from "./components/GameEasy"
import { GameHard } from "./components/GameHard"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const levels = useLevel();
  console.log(levels.level);
  return (
    <Router>
      <div className="App" >
        <Header />
        {levels.level ? <Route path='/game-easy' component={GameEasy} /> : ""}
        {levels.level ? <Route path='/game-hard' component={GameHard} /> : ""}
        {levels.level ? ' ' : <ButtonsStart {...levels} />}
      </div>
    </Router>
  );
}

export default App;