import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const LoginRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            console.log('LoginRoute');
            return !isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname:
                                props.location.pathname === '/' ? '/login' : props.location.pathname,
                        }}
                    />
                );
        }}
    />
);

export default LoginRoute;
