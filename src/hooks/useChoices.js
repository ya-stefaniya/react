import { useState } from "react";

export function useChoices() {
    const [humanChoice, setHumanChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
    return { humanChoice, setHumanChoice, compChoice, setCompChoice };
} 