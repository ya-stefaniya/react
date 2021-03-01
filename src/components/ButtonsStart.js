<<<<<<< HEAD
<<<<<<< HEAD
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { InfoHard } from './InfoHard';
=======
import React, { useEffect, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
>>>>>>> 1746332... add: keys useeffect
import { useKeys } from '../hooks/useKeys';


<<<<<<< HEAD
<<<<<<< HEAD
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, setHumanChoice, compChoice, setCompChoice, play, name, handleChange }) => {
=======
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, play }) => {
>>>>>>> b3666db... add: sounds
=======
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, play,
    humanChoice, setHumanChoice, compChoice, setCompChoice }) => {

    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }
>>>>>>> d123f5b... add: mute from keys

<<<<<<< HEAD
    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }

    //key control of the level
    const onKeypress = e => {
        if (e.code === 'KeyC') {
            setLevel('');
            setLevel('game-classic');
        }
        else if (e.code === 'KeyH') {
            setLevel('');
            setLevel('game-hard');
        }
    }
    useKeys(onKeypress);

    return (
        <main className="buttons-start">
            <section className='main-screen'>
                <input type="text" className="name-input" placeholder="Your name"
                    value={name} onChange={handleChange}></input>
                <div className="start-options">
                    <div className="start-easy">
                        <div className="button-icons">
                            <span>&#128074;</span>
                            <span>&#128075;</span>
                            <span>&#9996;</span>
                        </div>
                        <Link to='/game-classic' level={level} options={options} name={name}>
                            <div>
                                <button className="start"
                                    onClick={() => {
                                        setLevel('game-classic');
                                        chooseOptions('game-classic');
                                        if (enabled) play({ id: 'cl2' });
                                        if (compChoice) reload();
                                    }}>start</button>
                            </div>
                        </Link>
                    </div>
                    <div className="start-hard" >
                        <Link to='/game-hard'>
                            <div>
                                <button className="start hard"
                                    onClick={() => {
                                        setLevel('game-hard');
                                        chooseOptions('game-hard');
                                        if (enabled) play({ id: 'cl2' });
                                        if (compChoice) reload();
                                    }}
                                >start</button>
                            </div>
                        </Link>
                        <InfoHard onClick={() => { if (enabled) play(); }} />
                        <div className="button-icons">
                            <span>&#128074;</span>
                            <span>&#128075;</span>
                            <span>&#9996;</span>
                            <span>&#129422;</span>
                            <span>&#128406;</span>
                        </div>
                    </div>

                </div>
            </section>
        </main >)
};
=======
import React from "react";
import { Link } from 'react-router-dom';

export const ButtonsStart = ({ level, setLevel }) => (

    <main className="buttons-start">
=======
    const onKeypress = e => {
        if (e.code === 'KeyC')
            setLevel('game-classic');
        if (e.code === 'KeyH')
            setLevel('game-hard');
    }
    useKeys(onKeypress);


    return (<main className="buttons-start">
>>>>>>> 1746332... add: keys useeffect
        <section className='main-screen'>
            <div className="start-easy">
                <div className="button-icons">
                    <span>&#128074;</span>
                    <span>&#128075;</span>
                    <span>&#9996;</span>
                </div>
                <Link to='/game-easy'>
                    <div>
                        <button className="start"
<<<<<<< HEAD
                            onClick={() => setLevel('game-easy')}
                        >Начать</button>
=======
                            onClick={() => {
                                setLevel('game-classic');
                                chooseOptions('game-classic');
                                if (enabled) play();
                                if (compChoice) reload();
                            }}>start</button>
>>>>>>> b3666db... add: sounds
                    </div>
                </Link>
            </div>
            <div className="start-hard">
                <Link to='/game-hard'>
                    <div>
                        <button className="start hard"
<<<<<<< HEAD
                            onClick={() => setLevel('game-hard')}
                        >Начать</button>
=======
                            onClick={() => {
                                setLevel('game-hard');
                                chooseOptions('game-hard');
                                if (enabled) play();
                                if (compChoice) reload();
                            }}
                        >start</button>
>>>>>>> b3666db... add: sounds
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
    </main>
);
>>>>>>> 01b41c5... add:basic game
