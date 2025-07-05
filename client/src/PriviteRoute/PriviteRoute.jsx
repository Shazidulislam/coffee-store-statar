import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PriviteRoute = ({children}) => {
    const {user , loading } = use(AuthContext)
     const location = useLocation()
     console.log(location)
    if(loading){
        return <span className='text-2xl text-center pt-20'>Loading......</span>
    }

    if(!user?.email){
        return <Navigate to={"/signin"}></Navigate>
    }
    return children;
};

export default PriviteRoute;