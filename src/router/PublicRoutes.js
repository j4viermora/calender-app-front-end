import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Proptypes from 'prop-types';

export const PublicRoutes = ({
        isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            { ...rest }
            component = { ( props ) => (
                   ( isAuthenticated )
                   ? ( <Redirect to = '/' />)  
                   : ( <Component { ...props } /> )  
            )
          }
        
        />   
    )
}

PublicRoutes.protoTypes = {
    isAuthenticathed: Proptypes.bool.isRequired,
    Componet : Proptypes.func.isRequired
}