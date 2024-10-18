import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [data, setData] = useState({
        username: "",
        email: ""
    })
    return(
        <AuthContext.Provider value={{data, setData}}>
            {children}
        </AuthContext.Provider>
    )
}