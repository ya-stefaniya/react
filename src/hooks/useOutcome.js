

import { useState } from "react";

export function useOutcome() {
    const [humanScore, setHumanScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [outcome, setOutcome] = useState('');
    return { humanScore, setHumanScore, compScore, setCompScore, outcome, setOutcome };
} 