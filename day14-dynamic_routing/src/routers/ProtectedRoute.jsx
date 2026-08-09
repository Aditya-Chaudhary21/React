import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const isAdmin = true;
    if(isAdmin){
        return children;
    }
    alert('not admin')
    return <Navigate to={"/"}/>
}

export default ProtectedRoute