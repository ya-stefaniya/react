<<<<<<< HEAD
import { useState, useEffect } from 'react';

export function useLevel() {

    const [level, setLevel] = useState('');

    useEffect(() => {
        const parsedLevel = localStorage.getItem("level") || 'game-classic';
        setLevel(parsedLevel)
    }, [])

    useEffect(() => {
        localStorage.setItem("level", level)
    }, [level]);

=======
import { useState } from 'react';

export function useLevel() {
    const [level, setLevel] = useState(null);
>>>>>>> 01b41c5... add:basic game
    return { level, setLevel };
}

