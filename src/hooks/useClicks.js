import { useState, useEffect } from "react";

export const useClicks = url => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

    const [play, { stop }] = useSound(url);
    useEffect(() => stop, []);

<<<<<<< HEAD
    return { toggleSounds, enabled };
<<<<<<< HEAD
=======
=======

    return { toggleSounds, enabled, play, stop };
>>>>>>> 2262b8f... add: keys control of level


>>>>>>> b3666db... add: sounds
};

