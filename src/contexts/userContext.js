import { createContext, useReducer} from "react";

export const UserContext = createContext();

const initialState = {
    isLogin: true,
    user: {
        email: 'default@example.com',
        password: 'secret',
        name: 'Mr Default',
        gender: 'Male',
        phone: '088812344321',
        role: 'user'
    },
};

// const initialState = {
//     isLogin: true,
//     user: {
//         email: 'default@example.com',
//         password: 'secret',
//         name: 'Mr Default',
//         gender: 'Male',
//         phone: '088812344321',
//         role: 'partner'
//     },
// };

// const initialState = {
//     isLogin: false,
//     user: null,
// };

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN':
            return {
                isLogin: true,
                user: payload,
            };
        case 'LOGOUT':
            return {
                isLogin: false,
                user: null,
            };
        default:
            throw new Error();
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={[state, dispatch]}>
            { children }
        </UserContext.Provider>
    );
};