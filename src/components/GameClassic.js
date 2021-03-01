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

>>>>>>> 2262b8f... add: keys control of level
import menu from '../sounds/menu.mp3';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


>>>>>>> b3666db... add: sounds

export const GameClassic = ({ level, setLevel, options,
    humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore,
    outcome, setOutcome,
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
                            options={options} enabled={enabled} play={play} />}

                        <Route path="/result">
                            <Result humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice}
                                options={options} outcome={outcome} setOutcome={setOutcome}
                                compScore={compScore} setCompScore={setCompScore}
                                humanScore={humanScore} setHumanScore={setHumanScore} enabled={enabled}
                                play={play}
                            />
                        </Route>

                    </div>
                </section>
>>>>>>> b3666db... add: sounds
            </>
        </Router >
    )

};

