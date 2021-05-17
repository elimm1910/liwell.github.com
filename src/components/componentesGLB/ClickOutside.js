import { useEffect } from 'react';

function ClickOutside(ref, toggleOpen, isOpen) {
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                if (isOpen === true) {
                    toggleOpen();
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref, isOpen, toggleOpen])
}

export default ClickOutside;