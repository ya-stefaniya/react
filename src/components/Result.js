import { React, useState, useEffect } from "react";
import { CompPick } from './CompPick';
import { HumanPick } from './HumanPick';
import { Link } from "react-router-dom";

export const Result = ({ options, humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore, outcome, setOutcome
}) => {

    const symbols = Object.values(options);

    const newCompPick = () => {
        setCompChoice(symbols[Math.floor(Math.random() * symbols.length)]);
        console.log(compChoice);
    }


    useEffect(() => {
        newCompPick();
    }, [humanChoice]);

    const reload = () => {
        setCompChoice();
        setHumanChoice();
        setOutcome();
    }

    const round = () => {
        if (compChoice)
            if (humanChoice === "rock" && compChoice.name === "scissors") {
                setOutcome("win");
                setHumanScore(humanScore + 1);
            } else if (humanChoice === "rock" && compChoice.name === "paper") {
                setOutcome("lose");
                setCompScore(compScore + 1);
            } else if (humanChoice === "scissors" && compChoice.name === "paper") {
                setOutcome("win");
                setHumanScore(humanScore + 1);
            } else if (humanChoice === "scissors" && compChoice.name === "rock") {
                setOutcome("lose");
                setCompScore(compScore + 1);
            } else if (humanChoice === "paper" && compChoice.name === "rock") {
                setOutcome("win");
                setHumanScore(humanScore + 1);
            } else if (humanChoice === "paper" && compChoice.name === "scissors") {
                setOutcome("lose");
                setCompScore(compScore + 1);
            } else {
                humanChoice && setOutcome("draw");
            }


    };
    useEffect(() => {
        round();
    }, [compChoice]);


    return (
        <>
            <div className="result">
                <HumanPick setHumanChoice={setHumanChoice} humanChoice={humanChoice} options={options} />
                <div className="score">
                    {compChoice &&
                        outcome == 'win' ? <h2>Win!</h2> :
                        outcome == 'lose' ? <h2>Lose!</h2> :
                            outcome == 'draw' && <h2>Draw!</h2>
                    }
                    {compChoice && <Link to='/game-classic' onClick={() => reload()}>Новый раунд</Link>}
                </div>
                <CompPick setCompChoice={setCompChoice} compChoice={compChoice} humanChoice={humanChoice} options={options} />
            </div>
        </>
    )
}