<<<<<<< HEAD
import { React, useEffect } from "react";
import { useMusic } from '../hooks/useMusic';
import { useKeys } from '../hooks/useKeys';

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
import { useMusic } from '../hooks/useMusic';
import back from '../sounds/back.mp3';



export const Settings = ({ toggleSounds, enabled }) => {

    const [playing, toggle] = useMusic(back);
>>>>>>> b3666db... add: sounds
    return (
        <div className="settings icon">
            <span onClick={() => { toggleSounds(); if (!enabled) play({ id: 'cl2' }) }}> {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>&#129351;</span>
        </div >
    )
}