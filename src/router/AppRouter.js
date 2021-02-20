import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';


import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { Loading } from '../components/ui/components/Loading';
import { PrivateRoutes } from './PrivateRoutes ';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    
    

    const { checking, uid } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch( startChecking() )

    }, [ dispatch ] )
   

    if ( checking ) {

        return ( <Loading /> )

    }

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoutes
                    exact 
                    path="/" 
                    component={ CalendarScreen  }
                    isAuthenticated={ !!uid }
                     />      
                    <PublicRoutes
                    exact 
                    path="/login" 
                    component={ LoginScreen }
                    isAuthenticated={ !!uid } 
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}

