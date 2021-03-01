import { React, useEffect, useState } from "react";

<<<<<<< HEAD
export const InfoHard = () => {
    const [style, setStyle] = useState({ display: 'none' });
=======

export const InfoHard = () => {
    const [style, setStyle] = useState({ opacity: '0' });
>>>>>>> 48043d0... add: info about hard-level

    return (
        <div className='info-hard'>
            <span className='span'
<<<<<<< HEAD
                onMouseOver={() => setStyle({ display: 'block' })}
                onMouseOut={() => setStyle({ display: 'none' })}>
=======
                onMouseOver={() => setStyle({ opacity: '1' })}
                onMouseOut={() => setStyle({ opacity: '0' })}>
>>>>>>> 48043d0... add: info about hard-level
                &#8265;
            </span>

            <div className='info' style={style}
<<<<<<< HEAD
                onMouseOver={() => setStyle({ display: 'block' })}
                onMouseOut={() => setStyle({ display: 'none' })}
=======

            // onMouseOver={() => setStyle({ display: 'block' })}
            // onMouseOut={() => setStyle({ display: 'none' })}
>>>>>>> 48043d0... add: info about hard-level
            >
                <p>In The Big Bang Theory, <b>Sheldon Cooper</b> explains an extension of the game Rock, Paper, Scissors by introducing two more possibilities, <b><i>Lizard and Spock</i></b>, so the game becomes Rock, Paper, Scissors, Lizard, Spock.
                <br /><br />
                Sam Kass and Karen Bryla invented the game before it became widely known via the television show.
                </p>
                <a href='https://youtu.be/iapcKVn7DdY' target="_blank">
                    &#127916; <i>Check it out!</i></a>
            </div>
<<<<<<< HEAD
        </div>
=======
        </div >
>>>>>>> 48043d0... add: info about hard-level
    )
}

