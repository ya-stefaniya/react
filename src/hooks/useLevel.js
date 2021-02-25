import { useState } from 'react';

export function useLevel() {
    const [level, setLevel] = useState(null);
    return { level, setLevel };
}

