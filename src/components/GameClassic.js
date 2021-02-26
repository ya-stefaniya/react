import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { useChoices } from '../hooks/useChoices';
import { useOutcome } from '../hooks/useOutcome';

import { Link } from "react-router-dom";
import { Result } from './Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const GameClassic = ({ level, options }) => {

    const choices = useChoices();
    const outcome = useOutcome();

    //у нас есть уровень level
    return (
        <Router>
            <>
                <h1>{level == 'game-classic' ? 'Classic Game' : 'Speacial Mode'}</h1>
                <section>
                    <div className="container">
                        <div className="players">
                            <div className="result-header">
                                <h3>You choice</h3>
                                <span>{outcome.humanScore}</span>
                            </div>

                            <div className="result-header">
                                <span>{outcome.compScore}</span>
                                <h3>Opponent</h3>
                            </div>

                        </div>
                        {!choices.compChoice && <HumanPick {...choices} level={level} options={options} />}
                        <Route path="/result">
                            <Result {...choices} {...outcome} level={level} options={options} />
                        </Route>
                    </div>
                </section>
            </>
        </Router>
    )

};