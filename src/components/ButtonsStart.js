<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { InfoHard } from './InfoHard';
=======
import React, { useEffect, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
>>>>>>> 1746332... add: keys useeffect
=======
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { InfoHard } from './InfoHard';
>>>>>>> 48043d0... add: info about hard-level
import { useKeys } from '../hooks/useKeys';

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, setHumanChoice, compChoice, setCompChoice, play, name, handleChange }) => {
=======
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, play }) => {
>>>>>>> b3666db... add: sounds
=======
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, play,
    humanChoice, setHumanChoice, compChoice, setCompChoice }) => {
=======
=======

>>>>>>> 0bf1a78... add: change-level button
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, setHumanChoice, compChoice, setCompChoice, play }) => {
>>>>>>> 2262b8f... add: keys control of level
=======
export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, setHumanChoice, compChoice, setCompChoice, play, name, handleChange }) => {
>>>>>>> 192116d... add:footer

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
=======
>>>>>>> 01b41c5... add:basic game
import React from "react";
import { Link } from 'react-router-dom';

export const ButtonsStart = ({ level, setLevel }) => (

<<<<<<< HEAD
<<<<<<< HEAD
    <main className="buttons-start">
=======
=======
    //key control of the level
>>>>>>> 2262b8f... add: keys control of level
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

<<<<<<< HEAD

    return (<main className="buttons-start">
>>>>>>> 1746332... add: keys useeffect
=======
    <main className="buttons-start">
>>>>>>> 01b41c5... add:basic game
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
<<<<<<< HEAD
                            onClick={() => setLevel('game-easy')}
                        >????????????</button>
=======
                            onClick={() => {
                                setLevel('game-classic');
                                chooseOptions('game-classic');
                                if (enabled) play({ id: 'cl2' });
                                if (compChoice) reload();
                            }}>start</button>
>>>>>>> b3666db... add: sounds
=======
                            onClick={() => setLevel('game-easy')}
                        >????????????</button>
>>>>>>> 01b41c5... add:basic game
                    </div>
                </Link>
            </div>
            <div className="start-hard">
                <Link to='/game-hard'>
                    <div>
                        <button className="start hard"
<<<<<<< HEAD
<<<<<<< HEAD
                            onClick={() => setLevel('game-hard')}
                        >????????????</button>
=======
                            onClick={() => {
                                setLevel('game-hard');
                                chooseOptions('game-hard');
                                if (enabled) play({ id: 'cl2' });
                                if (compChoice) reload();
                            }}
                        >start</button>
>>>>>>> b3666db... add: sounds
=======
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
>>>>>>> 192116d... add:footer
                    </div>

<<<<<<< HEAD
            </div>
        </section>
    </main>
);
>>>>>>> 01b41c5... add:basic game
=======
                </div>
            </section>
        </main >)
};
>>>>>>> 192116d... add:footer
=======
                            onClick={() => setLevel('game-hard')}
                        >????????????</button>
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
