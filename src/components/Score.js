import { React, useEffect } from "react";
import { Link } from "react-router-dom";

export const Score = ({ outcome, setOutcome, enabled, play,
    action, setAction, humanChoice, compChoice, reload }) => {

    console.log(action);
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
                reload(); if (enabled) play()
            }}>
                <h3 className='again'>Again</h3></Link>}
        </div>
    )
};