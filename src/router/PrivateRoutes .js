import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoutes  = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    return (
        <Route 
            { ...rest }
            component = { ( props ) => (
                        ( isAuthenticated )
                          ? ( <Component { ...props }  /> )
                          : ( <Redirect to='/login'   /> ) 
                    ) 
        }
        />
    )
}

PrivateRoutes.protoTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    Component: PropTypes.func.isRequired
}