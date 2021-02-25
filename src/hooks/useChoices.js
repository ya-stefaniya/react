<<<<<<< HEAD
import { useState, useEffect } from "react";

export function useChoices() {
    const [humanChoice, setHumanChoice] = useState();
    const [compChoice, setCompChoice] = useState();

    // useEffect(() => {
    //     const parsedHumanChoice = localStorage.getItem("humanChoice");
    //     setHumanChoice(parsedHumanChoice);
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("humanChoice", humanChoice);
    // }, [humanChoice]);

    // useEffect(() => {
    //     const parsedCompChoice = localStorage.getItem("compChoice");
    //     setCompChoice(parsedCompChoice);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("compChoice", compChoice);
    // }, [compChoice]);

=======
import { useState } from "react";

export function useChoices() {
    const [humanChoice, setHumanChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
>>>>>>> 01b41c5... add:basic game
    return { humanChoice, setHumanChoice, compChoice, setCompChoice };
} 