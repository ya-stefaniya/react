import React from 'react';

<<<<<<< HEAD
export const Emoji = ({ id, label, symbol, setHumanChoice, enabled, play }) => {



    return (
        <span
            className='emoji'
            role="img"
            id={id}
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            onClick={(e) => {
                setHumanChoice(e.target.id);
                if (enabled) play({ id: 'cl2' });
            }
            }
        >
            {symbol}
        </span>
    );
}


=======
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
>>>>>>> 01b41c5... add:basic game

