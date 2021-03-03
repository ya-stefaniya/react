import { React, useState, useEffect } from "react";


export const EndGame = ({ name, humanScore, compScore }) => async (dispatch) => {
    const config = {
        headers: { 'Content-Type': 'application.json' },
    };
    const body = JSON.stringify({ name, humanScore, compScore });

    try {
        const res = await axios.put('http://localhost:5000/game', body, config);
        dispatch({
            type: actionTypes.END_GAME,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
}
