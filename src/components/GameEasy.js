import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { useChoices } from '../hooks/useChoices';

import { Link } from "react-router-dom";
import { Result } from './Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





export const GameEasy = () => {

    const choices = useChoices();

    return (
        <Router>
            <>
                <h1>клэссик гэйм</h1>
                <section>
                    <div className="container">
                        <div className="players">
                            <div className='player human' >
                                <div className="result-header"><h3>Твой ход</h3> <span>0</span></div>
                                <Route path="/game-easy">
                                    <HumanPick {...choices} />
                                </Route>
                            </div>


                            <div className='player computer'>
                                <div className="result-header"><h3>Соперник</h3> <span>0</span></div>
                            </div>
                        </div>
                        <Route path="/result">
                            <Result {...choices} />
                        </Route>
                    </div>
                </section>
            </>
        </Router>
    )

};