import { createContext, useEffect, useReducer } from "react";

// Initial state for the auth context
const initialState = {
    user: localStorage.getItem("user") === undefined? JSON.parse(localStorage.getItem("user")) : null,
    token:  localStorage.getItem("token") || null,
    role:  localStorage.getItem("role") || null,
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
                role: action.payload.role
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

    useEffect(()=> {
        localStorage.setItem("user",JSON.stringify(state.user))
        localStorage.setItem("token",JSON.stringify(state.token))
        localStorage.setItem("role",JSON.stringify(state.role))
    }, [state])

    return (<AuthContext.Provider
                    value={{
                        user: state.user,
                        token: state.token,
                        role: state.role,
                        dispatch,
                    }}>
                {children}
            </AuthContext.Provider>);
};


