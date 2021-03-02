import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { Result } from './Result';
<<<<<<< HEAD
import { useAction } from '../hooks/useAction';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
=======
import useSound from 'use-sound';
=======
import { useClicks } from '../hooks/useClicks';
import { useAction } from '../hooks/useAction';

<<<<<<< HEAD
>>>>>>> 2262b8f... add: keys control of level
import menu from '../sounds/menu.mp3';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


>>>>>>> b3666db... add: sounds
=======
=======


>>>>>>> 3ebf737... add: sounds from app
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
>>>>>>> a77c656... add: comment to game result

export const GameClassic = ({ level, setLevel, options,
    humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore,
    outcome, setOutcome,
<<<<<<< HEAD
<<<<<<< HEAD
    enabled, play, name }) => {

    const actions = useAction('no-action');
    const screen1 = useFullScreenHandle();
    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }
=======
    enabled }) => {

    //у нас есть уровень level
<<<<<<< HEAD

<<<<<<< HEAD
    const [play, { stop }] = useSound(menu);
    useEffect(() => stop, []);
>>>>>>> b3666db... add: sounds




=======
=======
>>>>>>> 48043d0... add: info about hard-level
    const { play } = useClicks(menu);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2262b8f... add: keys control of level

    return (
        <Router>
            <>
                <FullScreen handle={screen1}>
                    <h1>{level == 'game-classic' ? 'Classic Game' : 'Special Mode'}</h1>
                    <span className="full-screen" onClick={screen1.active ? screen1.exit : screen1.enter}>&#129498;</span>
                    <Link to='/'>
                        <button className='back' onClick={() => {
                            if (enabled) play({ id: 'cl1' });
                            if (compChoice) reload();
                            { level == 'game-classic' ? setLevel('game-hard') : setLevel('game-classic') }
                        }}>
                            change level</button>
                    </Link>
                    <section>
                        <div className="container">
                            <div className="players">
                                <div className="result-header">
                                    <h3>{name ? name : 'You'}</h3>
                                    <span>{humanScore}</span>
                                </div>

                                <div className="result-header">
                                    <span>{compScore}</span>
                                    <h3>Opponent</h3>
                                </div>
=======
=======
=======
    enabled, play }) => {

>>>>>>> 3ebf737... add: sounds from app
    const actions = useAction('no-action');

>>>>>>> a77c656... add: comment to game result
    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }
    return (
        <Router>
            <>
                <h1>{level == 'game-classic' ? 'Classic Game' : 'Special Mode'}</h1>

                <Link to='/'>
                    <button className='back' onClick={() => {
                        if (enabled) play({ id: 'cl1' });
                        if (compChoice) reload();
                        { level == 'game-classic' ? setLevel('game-hard') : setLevel('game-classic') }
                    }}>
                        change level</button>
                </Link>
                <section>
                    <div className="container">
                        <div className="players">
                            <div className="result-header">
                                <h3>You choice</h3>
                                <span>{humanScore}</span>
                            </div>
>>>>>>> 0bf1a78... add: change-level button

                            </div>
                            {!compChoice && <HumanPick humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice} level={level}
                                options={options} enabled={enabled} play={play} />}
                            <Route path="/result">
                                <Result humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice}
                                    options={options} outcome={outcome} setOutcome={setOutcome}
                                    compScore={compScore} setCompScore={setCompScore}
                                    humanScore={humanScore} setHumanScore={setHumanScore} enabled={enabled}
                                    {...actions} play={play}
                                />
                            </Route>

                        </div>
<<<<<<< HEAD
                    </section>
                </FullScreen>
=======
                        {!compChoice && <HumanPick humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice} level={level}
                            options={options} enabled={enabled} play={play}/>}

                        <Route path="/result">
                            <Result humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice}
                                options={options} outcome={outcome} setOutcome={setOutcome}
                                compScore={compScore} setCompScore={setCompScore}
                                humanScore={humanScore} setHumanScore={setHumanScore} enabled={enabled}
                                {...actions} play={play}
                            />
                        </Route>

                    </div>
                </section>
>>>>>>> b3666db... add: sounds
            </>
        </Router >
    )

};

