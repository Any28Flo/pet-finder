
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAppContext } from '../context'
import Wrapper from '../layout/Wrapper';

const RequireAuth = () => {
    const {state}  = useAppContext();
    const location = useLocation();
    if(!state.user){
        return <Navigate to="/" state={{ from: location }} replace />
    }
    return (
      <Wrapper>
        <Outlet />
      </Wrapper>
    )
}

export default RequireAuth