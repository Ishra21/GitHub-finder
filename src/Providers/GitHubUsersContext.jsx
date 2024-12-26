import { createContext, useReducer } from "react";
import GitHubUserReducer from "./GitHubUserReducer";

const GitHubUserContext = createContext()



export const GitHubUserProvider = ({ children }) => {

    // initial state
    const initialState = {
        users: [],
        user: {}
    }


    // reducer
    const [state, dispatch] = useReducer(GitHubUserReducer, initialState)

    return (
        <GitHubUserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GitHubUserContext.Provider>
    )
}

export default GitHubUserContext