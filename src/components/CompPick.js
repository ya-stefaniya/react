
import { React, useState, useEffect } from "react";


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const CompPick = ({ compChoice, humanChoice, outcome, counter }) => {

    return (
        <>
            {humanChoice && <div className={`comp-choice ${outcome == 'lose' && counter == 0 ? 'winner' : ''}`}>
=======
export const CompPick = ({ compChoice, humanChoice, options, outcome }) => {

    return (
        <>
            {humanChoice && <div className={`comp-choice ${outcome=='lose' ? 'winner' : ''}`}>
>>>>>>> d123f5b... add: mute from keys
=======
export const CompPick = ({ compChoice, humanChoice, outcome, counter }) => {

    return (
        <>
            {humanChoice && <div className={`comp-choice ${outcome == 'lose' && counter == 0 ? 'winner' : ''}`}>
>>>>>>> a77c656... add: comment to game result
                <span>{compChoice && compChoice.name}</span>
                <div className='answer'>
                    {compChoice && compChoice.symbol}
                </div>
=======
export const CompPick = ({ compChoice, humanChoice }) => {


    return (
        <>
            {humanChoice && <div className="comp-choice">
                <span>{compChoice}</span>
                <img className={compChoice} />
>>>>>>> 01b41c5... add:basic game
            </div>
            }
        </>
    )
};

