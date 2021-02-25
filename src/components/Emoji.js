import React from 'react';

export const Emoji = ({ id, label, symbol, setHumanChoice }) => (
    <span
        className="emoji"
        role="img"
        id={id}
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        onClick={(e) => {
            setHumanChoice(e.target.id)
        }
        }
    >
        {symbol}
    </span>
);


{/* <span id='rock' onClick={(e) => (setHumanChoice(e.target.id))}>{symbol}</span> */ }

