import { React, useState, useEffect } from "react";
import './css/style.scss';
//

import { Header } from "./components/Header";
import { ButtonsStart } from "./components/ButtonsStart";
import { GameClassic } from "./components/GameClassic"
import { Result } from "./components/Result"
import click from './sounds/click.mp3';

//hooks
import { useLevel } from './hooks/useLevel';
import { useOptions } from './hooks/useOptions';
import { useChoices } from './hooks/useChoices';
import { useOutcome } from './hooks/useOutcome';
import { useClicks } from './hooks/useClicks';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  //hooks
  const levels = useLevel();
  const options = useOptions();
  const choices = useChoices();
  const outcome = useOutcome();
  const clicks = useClicks(click);

  //refresh options according to level in LocalStorage
  useEffect(() => {
    options.chooseOptions(levels.level);
  }, [levels.level]);

  return (
    <Router>
      <div className="App" >
        <Header {...clicks} {...levels} />

        {levels.level &&
          <Route path='/game-classic' exact render={() => <GameClassic {...levels} {...options} {...choices} {...outcome} {...clicks} />}
          />}

        {levels.level &&
          <Route path='/game-hard' exact render={() => <GameClassic {...levels}  {...options} {...choices} {...outcome} />}
          />}

        {!choices.humanChoice ? <Redirect to={levels.level} /> :
          <Route path="/result" render={() =>
            <Result {...choices} {...outcome} {...levels} {...options} />} />}

        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks}  {...choices} />} />

      </div>
    </Router>
  );
}

export default App;