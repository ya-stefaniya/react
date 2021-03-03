<<<<<<< HEAD
<<<<<<< HEAD
import { React, useEffect } from "react";
import { useMusic } from '../hooks/useMusic';
import { useKeys } from '../hooks/useKeys';

<<<<<<< HEAD
import back from '../sounds/back.mp3';

export const Settings = ({ toggleSounds, enabled, play }) => {

    const [playing, toggle] = useMusic(back);

    const onKeypress = e => {
        if (e.ctrlKey && e.code === 'KeyM')
            toggle();
        if (e.ctrlKey && e.code === 'KeyS')
            toggleSounds();
        if (!enabled) play({ id: 'cl2' })
    }
    useKeys(onKeypress);

=======
import React from "react";
=======
import { React, useEffect } from "react";
>>>>>>> d123f5b... add: mute from keys
import { useMusic } from '../hooks/useMusic';
=======
>>>>>>> 1746332... add: keys useeffect
import back from '../sounds/back.mp3';

export const Settings = ({ toggleSounds, enabled, play }) => {

    const [playing, toggle] = useMusic(back);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b3666db... add: sounds
=======
=======

>>>>>>> 1746332... add: keys useeffect
    const onKeypress = e => {
        if (e.ctrlKey && e.code === 'KeyM')
            toggle();
        if (e.ctrlKey && e.code === 'KeyS')
            toggleSounds();
        if (!enabled) play({ id: 'cl2' })
    }
    useKeys(onKeypress);

>>>>>>> d123f5b... add: mute from keys
    return (
        <div className="settings icon">
<<<<<<< HEAD
<<<<<<< HEAD
            <span onClick={() => { toggleSounds(); if (!enabled) play({ id: 'cl2' }) }}> {enabled ? '🔈' : '🔇'}</span>
=======
            <span onClick={() => { toggleSounds(); if (!enabled) play() }}> {enabled ? '🔈' : '🔇'}</span>
>>>>>>> 1746332... add: keys useeffect
=======
            <span onClick={() => { toggleSounds(); if (!enabled) play({ id: 'cl2' }) }}> {enabled ? '🔈' : '🔇'}</span>
>>>>>>> 3ebf737... add: sounds from app
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>&#129351;</span>
<<<<<<< HEAD
<<<<<<< HEAD
        </div >
=======
            <span>&#128511;</span>
<<<<<<< HEAD
        </div>
>>>>>>> 48043d0... add: info about hard-level
=======
=======
>>>>>>> 192116d... add:footer
        </div >
>>>>>>> 3ebf737... add: sounds from app
    )
}