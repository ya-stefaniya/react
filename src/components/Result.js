import { React, useState, useEffect } from "react";
import { CompPick } from './CompPick';
import { HumanPick } from './HumanPick';
import { Link } from "react-router-dom";

export const Result = ({ humanChoice, setHumanChoice, compChoice, setCompChoice }) => {


    const newCompPick = () => {
        const options = ['rock', 'paper', 'scissors'];
        setCompChoice(options[Math.floor(Math.random() * 3)]);
    }
    useEffect(() => {
        newCompPick();
    }, []);



    const reload = () => {
        setHumanChoice();
        setCompChoice();
        newCompPick();
        console.log(compChoice);
        // setWinner();
    }
    return (
        <div className="result">
            <HumanPick setHumanChoice={setHumanChoice} humanChoice={humanChoice} />
            <div className="score">
                {compChoice && <Link to='/game-easy' onClick={() => reload()}>Again</Link>}
            </div>
            <CompPick setCompChoice={setCompChoice} compChoice={compChoice} humanChoice={humanChoice} />
        </div>
    )
}