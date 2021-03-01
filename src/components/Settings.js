import { React, useEffect } from "react";
import { useMusic } from '../hooks/useMusic';
import { useKeys } from '../hooks/useKeys';

import back from '../sounds/back.mp3';



export const Settings = ({ toggleSounds, enabled, play }) => {

    const [playing, toggle] = useMusic(back);

    const onKeypress = e => {
        if (e.code === 'KeyM')
            toggle();
        if (e.code === 'KeyS')
            toggleSounds();
    }
    useKeys(onKeypress);

    return (
        <div className="settings icon">
            <span onClick={() => { toggleSounds(); if (!enabled) play() }}> {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>&#129351;</span>
            <span>&#128511;</span>
        </div>
    )
}