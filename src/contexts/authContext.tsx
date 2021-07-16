import React, {createContext,useContext,useState } from 'react'

export type User={
 _id:string;
 name:string;
 email:string;
}
export type Auth={
  token: string;
  user: User;
}

export type AuthContextType={
    auth:Auth | null;
    setAuth:(auth:Auth) => void
}

const AuthContext = createContext<AuthContextType>({auth:null,setAuth:auth => console.log(auth)})

export const AuthProvider:React.FC = ({children}) => {
    const [auth ,setAuth]= useState(JSON.parse(localStorage.getItem("login") || "null"))

    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}