import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { Result } from './Result';
import { useClicks } from '../hooks/useClicks';

import menu from '../sounds/menu.mp3';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export const GameClassic = ({ level, setLevel, options,
    humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore,
    outcome, setOutcome,
    enabled }) => {

    //у нас есть уровень level
    const { play } = useClicks(menu);
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
                        if (enabled) play();
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
                                play={play}
                            />
                        </Route>

                    </div>
                </section>
            </>
        </Router>
    )

};