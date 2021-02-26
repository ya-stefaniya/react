
import { React, useState, useEffect } from "react";


export const CompPick = ({ compChoice, humanChoice, options }) => {
    console.log('compChoice: ', compChoice);

    let result = options.find(obj => {
        return obj.compChoice;
    })
    console.log('result: ', result);
    return (
        <>
            {humanChoice && <div className="comp-choice">
                <span>{compChoice && compChoice.name}</span>
                <div className='answer'>
                    {compChoice && compChoice.symbol}
                </div>
            </div>
            }
        </>
    )
};

