import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { useSound } from '../hooks/useClicks';
import { Result } from './Result';

import count from '../sounds/count.mp3';
import menu from '../sounds/menu.mp3';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export const GameClassic = ({ level, setLevel, options,
    humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore,
    outcome, setOutcome }) => {
    //у нас есть уровень level


    return (
        <Router>
            <>
                <h1>{level == 'game-classic' ? 'Classic Game' : 'Special Mode'}</h1>
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
                            options={options} />}

                        <Route path="/result">
                            <Result humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice}
                                options={options} outcome={outcome} setOutcome={setOutcome}
                                compScore={compScore} setCompScore={setCompScore}
                                humanScore={humanScore} setHumanScore={setHumanScore}
                            />
                        </Route>

                    </div>
                </section>
            </>
        </Router>
    )

};