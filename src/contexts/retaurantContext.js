import { createContext, useReducer } from "react";

// TEMPORARY!
import { restaurants, menus } from '../data/dummy';

export const RestaurantContext = createContext();

const initialState = {
    restaurants,
    menus,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD__MENU':
            return state;
        default:
            throw new Error();
    }
};

export const RestaurantContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <RestaurantContext.Provider value={[state, dispatch]}>
            { children }
        </RestaurantContext.Provider>
    );
};