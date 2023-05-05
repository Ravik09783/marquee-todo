import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes =()=>{
    let authentication = !!localStorage.getItem('token')
    return authentication?<Outlet />:<Navigate to= '/login'/>
}

export default PrivateRoutes;