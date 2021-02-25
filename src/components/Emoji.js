import React from 'react';

<<<<<<< HEAD
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
<<<<<<< HEAD
                if (enabled) play({ id: 'cl2' });
=======
                if (enabled) play();
>>>>>>> b3666db... add: sounds
=======
                if (enabled) play({ id: 'cl2' });
>>>>>>> 3ebf737... add: sounds from app
            }
            }
        >
            {symbol}
        </span>
    );
}


=======
=======
>>>>>>> 01b41c5... add:basic game
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
<<<<<<< HEAD
>>>>>>> 01b41c5... add:basic game
=======
>>>>>>> 01b41c5... add:basic game

