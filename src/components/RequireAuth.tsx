import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAppContext } from '../context'
import Wrapper from '../layout/Wrapper';

const RequireAuth = () => {
    const {user}  = useAppContext();
    const location = useLocation();
    if(!user){
        return <Navigate to="/" state={{ from: location }} replace />
    }
    return (
      <Wrapper>
        <Outlet />
      </Wrapper>
    )
}

export default RequireAuth