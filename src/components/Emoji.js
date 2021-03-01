import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
export const Emoji = ({ id, label, symbol, setHumanChoice, enabled, play }) => {


<<<<<<< HEAD
=======
export const Emoji = ({ id, label, symbol, setHumanChoice, enabled, play }) => {
>>>>>>> b3666db... add: sounds
=======
>>>>>>> d123f5b... add: mute from keys

    return (
        <span
            className='emoji'
            role="img"
            id={id}
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            onClick={(e) => {
                setHumanChoice(e.target.id);
<<<<<<< HEAD
                if (enabled) play({ id: 'cl2' });
=======
                if (enabled) play();
>>>>>>> b3666db... add: sounds
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

