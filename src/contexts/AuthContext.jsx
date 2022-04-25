import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [isAuth,setIsAuth] = useState(false);
    const toggleAuth =()=>{
        if(isAuth==false){
            setIsAuth(true)
        }
        else{
            setIsAuth(false)
        }
        
    }

    return (
        <AuthContext.Provider value={{ isAuth,toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}