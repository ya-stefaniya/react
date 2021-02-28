import React from 'react';
import useSound from 'use-sound';
import { useClicks } from '../hooks/useClicks';
import menu from '../sounds/menu.mp3';


export const Emoji = ({ id, label, symbol, setHumanChoice }) => {

    const [play] = useSound(menu);
    const [enabled] = useClicks();

    return (
        <span
            className="emoji"
            role="img"
            id={id}
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            onClick={(e) => {
                setHumanChoice(e.target.id);
                if (id && enabled) play();
            }
            }
        >
            {symbol}
        </span>
    );
}



