import { React, useState, useEffect } from "react";
import './css/style.scss';
//


import { Header } from "./components/Header";
import { ButtonsStart } from "./components/ButtonsStart";
import { GameClassic } from "./components/GameClassic"
import { Result } from "./components/Result"

//hooks
import { useLevel } from './hooks/useLevel';
import { useOptions } from './hooks/useOptions';
import { useChoices } from './hooks/useChoices';
import { useOutcome } from './hooks/useOutcome';
import { useClicks } from './hooks/useClicks';

import useSound from 'use-sound';
import on from './sounds/click.mp3';


import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  //hooks
  const levels = useLevel();
  const options = useOptions();
  const choices = useChoices();
  const outcome = useOutcome();
  const clicks = useClicks();

  const [play, { stop }] = useSound(on);
  useEffect(() => stop, []);

  //refresh options according to level in LocalStorage
  useEffect(() => {
    options.chooseOptions(levels.level);
  }, [levels.level]);


  // useEffect(() => {
  //   outcome.setHumanScore(outcome.humanScore);
  // }, [outcome.humanScore]);
  // useEffect(() => {
  //   choices.setHumanChoice(choices.humanChoice);
  // }, [choices.humanChoice]);

  // useEffect(() => {
  //   choices.setCompChoice(choices.compChoice);
  // }, [choices.compChoice]);


  return (
    <Router>
      <div className="App" >
        <Header {...clicks} {...levels} />

        {levels.level &&
          <Route path='/game-classic' render={() => <GameClassic {...levels} {...options} {...choices} {...outcome} {...clicks} />}
          />}

        {levels.level &&
          <Route path='/game-hard' render={() => <GameClassic {...levels}  {...options} {...choices} {...outcome} />}
          />}

        {!choices.humanChoice ? <Redirect to={levels.level} /> : <Route path="/result" render={() =>
          <Result {...choices} {...outcome} {...levels} {...options} />} />}

        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks}  {...choices} play={play} />} />

      </div>
    </Router>
  );
}

export default App;