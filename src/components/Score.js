import { React, useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useKeys } from '../hooks/useKeys';

export const Score = ({ outcome, enabled, play,
    action, humanChoice, compChoice, reload }) => {

=======

export const Score = ({ outcome, enabled, play,
    action, humanChoice, compChoice, reload }) => {

<<<<<<< HEAD
    console.log(action);
>>>>>>> a77c656... add: comment to game result
=======
>>>>>>> 3ebf737... add: sounds from app
    return (
        <div className="score">
            {
                outcome == 'win' ? <h2>Win!</h2> :
                    outcome == 'lose' ? <h2>Lose!</h2> :
                        outcome == 'draw' && <h2>Draw!</h2>
            }
            {
                outcome == 'win' ?
                    <h3 className="comment">{`${humanChoice} ${action} ${compChoice.name}`}</h3> :
                    outcome == 'lose' ? <h3 className="comment">{`${compChoice.name} ${action} ${humanChoice}`}</h3> : ''
            }
            {<Link to='/game-classic' onClick={() => {
<<<<<<< HEAD
<<<<<<< HEAD
                reload();
                if (enabled) play({ id: 'cl2' })
=======
                reload(); if (enabled) play()
>>>>>>> a77c656... add: comment to game result
=======
                reload();
                if (enabled) play({ id: 'cl2' })
>>>>>>> 3ebf737... add: sounds from app
            }}>
                <h3 className='again'>Again</h3></Link>}
        </div>
    )
};