import { useState, useEffect } from "react";



export const useClicks = () => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

<<<<<<< HEAD
    const [play, { stop }] = useSound(url);
    useEffect(() => stop, []);

<<<<<<< HEAD
    return { toggleSounds, enabled };
<<<<<<< HEAD
=======
=======

    return { toggleSounds, enabled, play, stop };
>>>>>>> 2262b8f... add: keys control of level
=======

    return { toggleSounds, enabled };
>>>>>>> 3ebf737... add: sounds from app


>>>>>>> b3666db... add: sounds
};

