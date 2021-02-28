
import { React, useState, useEffect } from "react";


export const CompPick = ({ compChoice, humanChoice, options }) => {


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

