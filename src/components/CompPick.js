
import { React, useState, useEffect } from "react";


export const CompPick = ({ compChoice, humanChoice, options, outcome }) => {

    return (
        <>
            {humanChoice && <div className={`comp-choice ${outcome=='lose' ? 'winner' : ''}`}>
                <span>{compChoice && compChoice.name}</span>
                <div className='answer'>
                    {compChoice && compChoice.symbol}
                </div>
            </div>
            }
        </>
    )
};

