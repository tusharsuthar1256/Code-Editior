import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContent';

function PrivateRoutes2() {
     const {user} = useAuth();
     

     return (
          user ? <Navigate to='/'/> :  <Outlet/>
     )
}

export default PrivateRoutes2;
