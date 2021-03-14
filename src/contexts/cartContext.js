import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    restaurantId: 0,
    totalQuantity: 0,
    menus: [],
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_CART':
            // For add menu that change source of restaurant chain.
            if (state.restaurantId !== payload.restaurantId){
                return {
                    restaurantId: payload.restaurantId,
                    totalQuantity: 1,
                    menus: [
                        ...state.menus,
                        {
                            ...payload,
                            quantity: 1,
                        },
                    ],
                };
            }
            // Add quantity menu if menu already in the cart.
            const existedMenu = state.menus.find(menu => menu.id === payload.id);
            console.log('Existed Menu', existedMenu);
            if (existedMenu) {
                const filtered = state.menus.filter(menu => menu.id !== payload.id);
                console.log('Filtered Menu', filtered);
                return {
                    ...state,
                    menus: [
                        ...filtered,
                        {
                            ...existedMenu,
                            quantity: existedMenu.quantity + 1,
                        },
                    ],
                };
            }
            // Add menu into cart normally.
            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                menus: [
                    ...state.menus,
                    {
                        ...payload,
                        quantity: 1,
                    },
                ],
            };
        default:
            throw new Error();
    }
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={[state, dispatch]}>
            { children }
        </CartContext.Provider>
    );
};