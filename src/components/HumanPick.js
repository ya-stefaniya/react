import { React, useState, useEffect } from "react";
import { Emoji } from './Emoji';
import { Link } from "react-router-dom";


export const HumanPick = ({ humanChoice, setHumanChoice, choices }) => {

    const threeSymbols = [
        { name: 'rock', symbol: '👊' },
        { name: 'paper', symbol: '👋' },
        { name: 'scissors', symbol: '✌' }
    ]

    return (
        <>
            {!humanChoice && <div className='options'>
                {threeSymbols.map((item, index) =>
                    <Link to='/result' key={index}>
                        <Emoji
                            key={index}
                            id={item.name}
                            label={item.symbol}
                            symbol={item.symbol}
                            setHumanChoice={setHumanChoice} />
                    </Link>
                )}
            </div>}
            {humanChoice && <div className="human-choice" >
                <span>{humanChoice}</span>
                <img className={`${humanChoice} result `}></img>
            </div>}
        </>
    )
};