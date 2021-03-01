import { useState, useEffect } from "react";
import useSound from 'use-sound';

export const useClicks = url => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

    const [play, { stop }] = useSound(url);
    useEffect(() => stop, []);


    return { toggleSounds, enabled, play, stop };


};

