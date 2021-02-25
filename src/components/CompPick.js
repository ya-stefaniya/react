
import { React, useState, useEffect } from "react";


export const CompPick = ({ compChoice, humanChoice }) => {


    return (
        <>
            {humanChoice && <div className="comp-choice">
                <span>{compChoice}</span>
                <img className={compChoice} />
            </div>
            }
        </>
    )
};

