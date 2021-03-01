<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { React, useState, useEffect } from "react";
import './css/style.scss';
<<<<<<< HEAD
<<<<<<< HEAD
import useSound from 'use-sound';
import sprite from './sounds/sprite.mp3';
=======
// import { Animated } from 'react-animated-css'
// console.log('Animated: ', Animated);
=======
//
>>>>>>> d123f5b... add: mute from keys

>>>>>>> b3666db... add: sounds

import { Header } from "./components/Header";
import { ButtonsStart } from "./components/ButtonsStart";
import { GameClassic } from "./components/GameClassic"
import { Result } from "./components/Result"
import { Footer } from "./components/Footer"


//hooks
import { useLevel } from './hooks/useLevel';
import { useOptions } from './hooks/useOptions';
import { useChoices } from './hooks/useChoices';
import { useOutcome } from './hooks/useOutcome';
import { useClicks } from './hooks/useClicks';
<<<<<<< HEAD
import { useName } from './hooks/useName';
=======

import useSound from 'use-sound';
import on from './sounds/click.mp3';

>>>>>>> b3666db... add: sounds

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  //hooks
  const levels = useLevel();
  const options = useOptions();
  const choices = useChoices();
  const outcome = useOutcome();
  const clicks = useClicks();
<<<<<<< HEAD
  const name = useName('Your name');
  const [play] = useSound(sprite, {
    sprite: {
      cl1: [0, 600],
      cl2: [600, 250],
      long: [850, 100],
    },
  });

=======

  const [play, { stop }] = useSound(on);
  useEffect(() => stop, []);

>>>>>>> b3666db... add: sounds
  //refresh options according to level in LocalStorage
  useEffect(() => {
    options.chooseOptions(levels.level);
  }, [levels.level]);
<<<<<<< HEAD
=======


  // useEffect(() => {
  //   outcome.setHumanScore(outcome.humanScore);
  // }, [outcome.humanScore]);
  // useEffect(() => {
  //   choices.setHumanChoice(choices.humanChoice);
  // }, [choices.humanChoice]);

  // useEffect(() => {
  //   choices.setCompChoice(choices.compChoice);
  // }, [choices.compChoice]);

>>>>>>> b3666db... add: sounds

  return (
    <Router>
      <div className="App" >
<<<<<<< HEAD
<<<<<<< HEAD
        <Header {...clicks}{...levels} play={play} />

        {levels.level &&
          <Route path='/game-classic' exact render={() => <GameClassic {...levels} {...options} {...choices} {...outcome} {...clicks} play={play} {...name} />}
=======
        <Header {...clicks} />
=======
        <Header {...clicks} {...levels} />
>>>>>>> d123f5b... add: mute from keys

        {levels.level &&
          <Route path='/game-classic' render={() => <GameClassic {...levels} {...options} {...choices} {...outcome} {...clicks} />}
>>>>>>> b3666db... add: sounds
          />}

        {levels.level &&
          <Route path='/game-hard' exact render={() => <GameClassic {...levels}  {...options} {...choices} {...outcome} {...clicks} play={play} {...name} />}
          />}

        {!choices.humanChoice ? <Redirect to={levels.level} /> :
          <Route path="/result" render={() =>
            <Result {...choices} {...outcome} {...levels} {...options} play={play} />} />}

<<<<<<< HEAD
<<<<<<< HEAD
        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks}  {...choices} play={play} {...name} />} />
        <Footer />
      </div>
    </Router>
  );
}
=======
        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks} play={play} />} />
>>>>>>> b3666db... add: sounds

export default App;
=======
=======
>>>>>>> f95bbb1... Initialize project using Create React App
import logo from './logo.svg';
import './App.css';
=======
import { React, useState } from "react";
import './css/style.scss';
import { Header } from "./components/Header";
import { useLevel } from './hooks/useLevel';

import { ButtonsStart } from "./components/ButtonsStart";
import { GameEasy } from "./components/GameEasy"
import { GameHard } from "./components/GameHard"
=======
        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks}  {...choices} play={play} />} />
>>>>>>> d123f5b... add: mute from keys

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 01b41c5... add:basic game

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

<<<<<<< HEAD
export default App;
<<<<<<< HEAD
>>>>>>> f95bbb1... Initialize project using Create React App
=======
>>>>>>> f95bbb1... Initialize project using Create React App
=======
export default App;
>>>>>>> 01b41c5... add:basic game
