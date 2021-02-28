import React from "react";
import { Link } from 'react-router-dom';
import { useMusic } from '../hooks/useMusic';
import { useClicks } from '../hooks/useClicks';


import on from '../sounds/on.mp3';
import back from '../sounds/back.mp3';

export const Settings = () => {
    const [playing, toggle] = useMusic(back);
    const [toggleSounds, enabled] = useClicks(on);
    return (
        <div className="settings icon">
            <span onClick={toggleSounds} > {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>🔝</span>
        </div>
    )
}