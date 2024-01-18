import { createContext, useReducer } from "react";

// Initial state for the auth context
const initialState = {
    user: {},
    token: null,
};

// Creating the auth context
export const AuthContext = createContext(initialState);

// Reducer function to handle state updates
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user: {},
                token: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...state,
                user: {},
                token: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (<AuthContext.Provider
                    value={{
                        user: state.user,
                        token: state.token,
                        dispatch,
                    }}>
                {children}
            </AuthContext.Provider>);
};


