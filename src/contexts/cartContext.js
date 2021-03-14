import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    restaurantId: 0,
    totalPrice: 0,
    totalQuantity: 0,
    orders: [],
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_CART':
            return payload;
        case 'ADD_CART':
            // For add order that change source of restaurant chain.
            if (state.restaurantId !== payload.restaurantId){
                return {
                    restaurantId: payload.restaurantId,
                    totalPrice: payload.price,
                    totalQuantity: 1,
                    orders: [
                        {
                            ...payload,
                            quantity: 1,
                        },
                    ],
                };
            }
            // Add quantity order if order already in the cart.
            const existedOrder = state.orders.find(menu => menu.id === payload.id);
            if (existedOrder) {
                const filtered = state.orders.filter(menu => menu.id !== payload.id);
                return {
                    ...state,
                    totalPrice: state.totalPrice + existedOrder.price,
                    totalQuantity: state.totalQuantity + 1,
                    orders: [
                        ...filtered,
                        {
                            ...existedOrder,
                            quantity: existedOrder.quantity + 1,
                        },
                    ],
                };
            }
            // Add menu into cart normally.
            return {
                ...state,
                restaurantId: state.restaurantId,
                totalPrice: state.totalPrice + payload.price,
                totalQuantity: state.totalQuantity + 1,
                orders: [
                    ...state.orders,
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