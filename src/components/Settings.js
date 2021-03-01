import { React, useEffect } from "react";
import { useMusic } from '../hooks/useMusic';
import back from '../sounds/back.mp3';



export const Settings = ({ toggleSounds, enabled }) => {

    const [playing, toggle] = useMusic(back);
    const onKeypress = e => {
        if (e.code === 'KeyM')
            toggle();
        if (e.code === 'KeyS')
            toggleSounds();
    }
    useEffect(() => {
        document.addEventListener('keypress', onKeypress);
        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [onKeypress]);

    return (
        <div className="settings icon">
            <span onClick={toggleSounds} > {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>🔝</span>
        </div>
    )
}