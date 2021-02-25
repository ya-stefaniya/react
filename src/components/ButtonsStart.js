import React from "react";
import { Link } from 'react-router-dom';

export const ButtonsStart = ({ level, setLevel }) => (

    <main className="buttons-start">
        <section className='main-screen'>
            <div className="start-easy">
                <div className="button-icons">
                    <span>&#128074;</span>
                    <span>&#128075;</span>
                    <span>&#9996;</span>
                </div>
                <Link to='/game-easy'>
                    <div>
                        <button className="start"
                            onClick={() => setLevel('game-easy')}
                        >Начать</button>
                    </div>
                </Link>
            </div>
            <div className="start-hard">
                <Link to='/game-hard'>
                    <div>
                        <button className="start hard"
                            onClick={() => setLevel('game-hard')}
                        >Начать</button>
                    </div>
                </Link>
                <div className="button-icons">
                    <span>&#128074;</span>
                    <span>&#128075;</span>
                    <span>&#9996;</span>
                    <span>&#129422;</span>
                    <span>&#128406;</span>
                </div>
            </div>
        </section>
    </main>
);