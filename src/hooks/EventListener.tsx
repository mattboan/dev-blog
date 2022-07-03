import {useEffect, useRef} from "react";


export const KEY_CODES = {
    escape: ["27", "Escape"],
    m: ["77", "m"]
};

/**
 * Hook for listening for keypresses
 */
export const useEventListener = (name: string, handler: any, element: HTMLElement = (window as any)) => {
    // Create a ref that stores the handler
    const ref_handler = useRef<any>(null!);

    // Watch the handler coming in from params
    useEffect(() => {
        ref_handler.current = handler;
    }, [handler]);

    // On component mount
    useEffect(() => {
        // Test if the element can support events
        const supported = element && element.addEventListener;
        if (!supported) {
            console.error(`useEventListener hook error: ${element} does not contain addEventListener fuction.`);
            return;
        }

        // Create an event listener
        const eventListener = (event: any) => ref_handler.current(event);

        // Add event listener to the element
        element.addEventListener(name, eventListener);

        // Remove the event listener on component removed
        return () => {
            element.removeEventListener(name, eventListener);
        };
    }, [name, element]);

};

