import React, { useEffect, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { useKeys } from '../hooks/useKeys';


export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, play,
    humanChoice, setHumanChoice, compChoice, setCompChoice }) => {

    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }

    const onKeypress = e => {
        if (e.code === 'KeyC')
            setLevel('game-classic');
        if (e.code === 'KeyH')
            setLevel('game-hard');
    }
    useKeys(onKeypress);


    return (<main className="buttons-start">
        <section className='main-screen'>
            <div className="start-easy">
                <div className="button-icons">
                    <span>&#128074;</span>
                    <span>&#128075;</span>
                    <span>&#9996;</span>
                </div>
                <Link to='/game-classic' level={level} options={options}>
                    <div>
                        <button className="start"
                            onClick={() => {
                                setLevel('game-classic');
                                chooseOptions('game-classic');
                                if (enabled) play();
                                if (compChoice) reload();
                            }}>start</button>
                    </div>
                </Link>
            </div>
            <div className="start-hard">
                <Link to='/game-hard' >
                    <div>
                        <button className="start hard"
                            onClick={() => {
                                setLevel('game-hard');
                                chooseOptions('game-hard');
                                if (enabled) play();
                                if (compChoice) reload();
                            }}
                        >start</button>
                    </div>
                </Link>
                <div className="button-icons">
                    <span>&#128074;</span>
                    <span>&#128075;</span>
                    <span>&#9996;</span>
                    <span>&#129422;</span>
                    <span>&#128406;</span>
                </div>
            </div>
        </section>
    </main>)
};