import { useState, useEffect } from "react";

export const useClicks = url => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

    return { toggleSounds, enabled };
<<<<<<< HEAD
=======


>>>>>>> b3666db... add: sounds
};

