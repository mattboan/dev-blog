import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState<number[]>([0, 0]);

    useLayoutEffect(() => {
        // Function for updating the states size
        const updateSize = () =>
            setSize([window.innerWidth, window.innerHeight]);

        // Listen to the resize of the window
        window.addEventListener("resize", updateSize);

        // Everytime the DOM is mutated
        updateSize();

        // When the compoenent unmounts remove the event listener
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
};
