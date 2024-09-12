// useDropdown.js
import { useReducer, useCallback, useRef, useEffect } from 'react';


const dropdownReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return { ...state, [action.dropdown]: !state[action.dropdown] };
        case 'CLOSE_ALL_DROPDOWNS':
            return Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: false }), {});
        default:
            return state;
    }
};


const useDropdown = (initialState) => {
    const [dropdownStates, dispatchDropdown] = useReducer(dropdownReducer, initialState);
    const dropdownRef = useRef(null);

    const toggleDropdown = useCallback((dropdown) => {
        dispatchDropdown({ type: 'TOGGLE_DROPDOWN', dropdown });
    }, []);

    const closeAllDropdowns = useCallback(() => {
        dispatchDropdown({ type: 'CLOSE_ALL_DROPDOWNS' });
    }, []);

 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeAllDropdowns();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, closeAllDropdowns]);

    return { dropdownStates, toggleDropdown, closeAllDropdowns, dropdownRef };
};

 export default useDropdown;
