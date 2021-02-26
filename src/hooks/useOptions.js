import { useState } from "react";

export function useOptions() {
    const [options, setOptions] = useState(null);

    const threeSymbols = [
        { name: 'rock', symbol: '👊' },
        { name: 'paper', symbol: '👋' },
        { name: 'scissors', symbol: '✌' }
    ]
    const fiveSymbols = [
        ...threeSymbols,
        { name: 'lizzard', symbol: '🦎' },
        { name: 'spok', symbol: '🖖' }
    ]
    function chooseOptions(level) {
        level == 'game-classic' ? setOptions(threeSymbols) : setOptions(fiveSymbols);
    }
    return { options, chooseOptions };
} 