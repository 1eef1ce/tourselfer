import {useState, useEffect} from 'react';

export const useWindowSize = () => {
    const [WindowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return WindowSize;
};