import { useState, useEffect } from "react";
import useSound from 'use-sound';

export const useClicks = () => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

    return [toggleSounds, enabled];
};

