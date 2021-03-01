<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d123f5b... add: mute from keys
import { React, useState, useEffect } from "react";
import { Settings } from './Settings'
import { Link } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
export const Header = ({ toggleSounds, enabled, play }) => {
    return (
        <>
            <header>
                <div>
                    <Link to='/' onClick={() => play({ id: 'cl2' })}>
                        <div className="logo">
                            <div className="icon">&#127918;</div>
                            <h1 className="header">Rock & Paper & Scissors</h1>
                        </div>
                    </Link>
                </div>
                <Settings toggleSounds={toggleSounds}
                    enabled={enabled}
                    play={play} />
            </header>
        </>
=======
export const Header = ({ toggleSounds, enabled }) => {


    return (
        <header>
            <div>
                <Link to='/'>
                    <div className="logo">
                        <div className="icon">&#127918;</div>
                        <h1 className="header">Rock & Paper & Scissors</h1>
                    </div>
                </Link>
            </div>
            <Settings toggleSounds={toggleSounds} enabled={enabled} />
        </header>
>>>>>>> b3666db... add: sounds
=======
export const Header = ({ toggleSounds, enabled, setCompChoice, setHumanChoice, compChoice }) => {

    return (
        <>
            <header>
                <div>
                    <Link to='/'>
                        <div className="logo">
                            <div className="icon">&#127918;</div>
                            <h1 className="header">Rock & Paper & Scissors</h1>
                        </div>
                    </Link>
                </div>
                <Settings toggleSounds={toggleSounds} enabled={enabled} />
            </header>
        </>
>>>>>>> d123f5b... add: mute from keys

    );
}
=======
import React from "react";

export const Header = () => (
    <>
        <header>
            <div className="logo">
                <div className="icon">&#127918;</div>
                <h1 className="header" onClick={() => (console.log('я тут'))}>Rock & Paper & Scissors</h1>
            </div>
            <div className="icon settings">&#128736;</div>
        </header>
    </>
);
>>>>>>> 01b41c5... add:basic game
