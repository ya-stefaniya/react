import { React, useState, useEffect } from "react";
import { CompPick } from './CompPick';
import { HumanPick } from './HumanPick';
import { Link } from "react-router-dom";

export const Result = ({ options, humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore, outcome, setOutcome, enabled, play
}) => {

    //create correct object body
    const symbols = Object.values(options);

    const newCompPick = () => {
        setCompChoice(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    useEffect(() => {
        newCompPick();
    }, [humanChoice]);

    const reload = () => {
        setCompChoice();
        setHumanChoice();
        //setOutcome();
    }


    const round = () => {
        const choices = {
            rock: { name: "rock", defeats: ["scissors", "lizard"] },
            paper: { name: "paper", defeats: ["rock", "spock"] },
            scissors: { name: "scissors", defeats: ["paper", "lizard"] },
            lizard: { name: "lizard", defeats: ["paper", "spock"] },
            spock: { name: "spock", defeats: ["scissors", "rock"] }
        };

        const humanChoiceLine = choices[humanChoice];
        const ready = Boolean(compChoice && humanChoice)
        const victory = humanChoiceLine.defeats.indexOf(ready && compChoice.name) > -1;

        if (ready && (compChoice.name == humanChoice)) {
            setOutcome('draw');
        } else {
            if (victory && ready) {
                setOutcome('win');
                setHumanScore(humanScore + 1);
            } else if (ready) {
                setOutcome('lose');
                setCompScore(compScore + 1);
            }
        }

    };
    useEffect(() => {
        round();
    }, [compChoice]);
    return (
        <>
            <div className="result">
                <HumanPick setHumanChoice={setHumanChoice}
                            humanChoice={humanChoice}
                            options={options}
                            enabled={enabled}
                            play={play}
                            outcome={outcome} />

                <div className="score">
                    {compChoice &&
                        outcome == 'win' ? <h2>Win!</h2> :
                        outcome == 'lose' ? <h2>Lose!</h2> :
                            outcome == 'draw' && <h2>Draw!</h2>
                    }
                    {compChoice && <Link to='/game-classic' onClick={() => {
                        reload(); if (enabled) play()
                    }}>
                        <h3 className='again'>Again</h3></Link>}
                </div>

                <CompPick setCompChoice={setCompChoice}
                        compChoice={compChoice}
                        humanChoice={humanChoice}
                        options={options}
                        outcome={outcome} />


            </div>
        </>
    )
}