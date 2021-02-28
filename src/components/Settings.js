import React from "react";
import { useMusic } from '../hooks/useMusic';
import back from '../sounds/back.mp3';



export const Settings = ({ toggleSounds, enabled }) => {

    const [playing, toggle] = useMusic(back);
    return (
        <div className="settings icon">
            <span onClick={toggleSounds} > {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>🔝</span>
        </div>
    )
}