import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HeaderComp from '../common/header'
// import HeaderComp from '../components/header'
const PrivateRoute = ({ component: Component, ...rest }) => (
                <div>
                     <Route {...rest} render={props => (
                    localStorage.getItem('auth')
                        ? (<div><HeaderComp/><Component {...props} /></div>)
                        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
                )} />
                </div>
               
            )

export default PrivateRoute;