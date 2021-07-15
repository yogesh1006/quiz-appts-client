import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../auth"

export default function ProtectedRoute({ path, component, ...props }: any){
    // const { login } = useAuth()
     const login= true;
    return (
        login ? <Route {...props} component={component} path={path} /> : <Redirect  to="/login"  />
    )
}