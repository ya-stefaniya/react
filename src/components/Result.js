import { React, useState, useEffect } from "react";
import { CompPick } from './CompPick';
import { HumanPick } from './HumanPick';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Score } from './Score';


<<<<<<< HEAD
export const Result = ({ options, humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore, outcome,
    setOutcome, enabled, action, setAction, play
}) => {

    const [counter, setCounter] = useState(10);
=======
import { Link } from "react-router-dom";
=======
import { Score } from './Score';
>>>>>>> a77c656... add: comment to game result

=======
>>>>>>> 3ebf737... add: sounds from app
export const Result = ({ options, humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore, outcome,
    setOutcome, enabled, action, setAction, play
}) => {

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b3666db... add: sounds
=======
    const [counter, setCounter] = useState(3);
>>>>>>> a77c656... add: comment to game result
=======
    const [counter, setCounter] = useState(10);
>>>>>>> 3ebf737... add: sounds from app
    //create correct object body
    const symbols = Object.values(options);

    const newCompPick = () => {
        setCompChoice(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    useEffect(() => {
        newCompPick();
    }, [counter]);

    const reload = () => {
        setCompChoice();
        setHumanChoice();
        setOutcome();
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a77c656... add: comment to game result
=======
>>>>>>> 3ebf737... add: sounds from app
    const round = () => {
        const choices = {
            "rock": {
                "scissors": "crushes",
                "lizard": "crushes"
            },
            "scissors": {
                "paper": "cuts",
                "lizard": "decapitates"
            },
            "spock": {
                "scissors": "smashes",
                "rock": "vaporizes"
            },
            "lizard": {
                "spock": "poisons",
                "paper": "eats"
            },
            "paper": {
                "spock": "disproves",
                "rock": "covers"
            }
        };

        const ready = Boolean(compChoice && humanChoice);
        const compChoiceName = ready && compChoice.name;
        const victory = choices[humanChoice].hasOwnProperty(compChoiceName);
        const verb = victory ? choices[humanChoice][compChoiceName] : choices[compChoiceName][humanChoice];
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> a77c656... add: comment to game result

=======
>>>>>>> 3ebf737... add: sounds from app
        if (ready && (compChoice.name == humanChoice)) {
            setOutcome('draw');
            setAction('');
        } else {
            if (victory && ready) {
                setOutcome('win');
                setHumanScore(humanScore + 1);
                setAction(verb);
            } else if (ready) {
                setOutcome('lose');
                setCompScore(compScore + 1);
                setAction(verb);
            }
        }
    };
    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a77c656... add: comment to game result
        const timer =
            counter > 0
                ? setInterval(() => {
                    setCounter(counter - 1);
<<<<<<< HEAD
<<<<<<< HEAD
                }, 100)
                : round();
        if (enabled) play({ id: 'long' });
=======
                    if (enabled) play();
                }, 1000)
                : round();
>>>>>>> a77c656... add: comment to game result
=======
                }, 100)
                : round();
        if (enabled) play({ id: 'long' });
>>>>>>> 3ebf737... add: sounds from app
        return () => {
            clearInterval(timer);
        };
    }, [counter, compChoice]);

<<<<<<< HEAD
    return (
        <>
            <div className="result">
<<<<<<< HEAD
                <HumanPick setHumanChoice={setHumanChoice}
                    humanChoice={humanChoice}
                    options={options}
                    enabled={enabled}
                    // play={play}
                    outcome={outcome}
                    counter={counter} />
                {counter === 0 ?
                    (<>
                        <Score humanChoice={humanChoice}
                            compChoice={compChoice}
                            options={options}
                            enabled={enabled}
                            play={play}
                            outcome={outcome}
                            reload={reload}
                            action={action}
                        />
                        <CompPick setCompChoice={setCompChoice}
                            compChoice={compChoice}
                            humanChoice={humanChoice}
                            options={options}
                            outcome={outcome}
                            counter={counter} />
                    </>)
                    :
                    <CompPick setCompChoice={setCompChoice}
                        compChoice={compChoice}
                        humanChoice={humanChoice}
                        options={options}
                        outcome={outcome}
                        counter={counter} />}
=======
                <HumanPick setHumanChoice={setHumanChoice} humanChoice={humanChoice} options={options} enabled={enabled} play={play} />
=======
        round();
    }, [compChoice]);
=======
>>>>>>> a77c656... add: comment to game result
    return (
        <>
            <div className="result">
                <HumanPick setHumanChoice={setHumanChoice}
                    humanChoice={humanChoice}
                    options={options}
                    enabled={enabled}
                    // play={play}
                    outcome={outcome}
                    counter={counter} />
                {counter === 0 ?
                    (<>
                        <Score humanChoice={humanChoice}
                            compChoice={compChoice}
                            options={options}
                            enabled={enabled}
                            play={play}
                            outcome={outcome}
                            reload={reload}
                            action={action}
                        />
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> d123f5b... add: mute from keys
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

<<<<<<< HEAD
                <CompPick setCompChoice={setCompChoice} compChoice={compChoice} humanChoice={humanChoice} options={options} />
>>>>>>> b3666db... add: sounds
=======
                <CompPick setCompChoice={setCompChoice}
                        compChoice={compChoice}
                        humanChoice={humanChoice}
                        options={options}
                        outcome={outcome} />
>>>>>>> d123f5b... add: mute from keys
=======
=======
>>>>>>> 3ebf737... add: sounds from app
                        <CompPick setCompChoice={setCompChoice}
                            compChoice={compChoice}
                            humanChoice={humanChoice}
                            options={options}
                            outcome={outcome}
                            counter={counter} />
                    </>)
                    :
<<<<<<< HEAD
                    <div className="counter">{counter}</div>}
>>>>>>> a77c656... add: comment to game result
=======
                    <CompPick setCompChoice={setCompChoice}
                        compChoice={compChoice}
                        humanChoice={humanChoice}
                        options={options}
                        outcome={outcome}
                        counter={counter} />}
>>>>>>> 3ebf737... add: sounds from app


            </div>
        </>
=======
=======
>>>>>>> 01b41c5... add:basic game
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
<<<<<<< HEAD
>>>>>>> 01b41c5... add:basic game
=======
>>>>>>> 01b41c5... add:basic game
    )
}