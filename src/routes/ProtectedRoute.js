import { Redirect, Route } from "react-router-dom";

import Layout from "../Layout";

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => (
        <Route
            {...rest}
            render={(props) => {
                console.log('isAuthenticated', isAuthenticated);
                return !isAuthenticated ? (
                    <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
                ) :
                    (
                        <Component {...props} />
                    )
                    ;
            }}
        />
    );

export default ProtectedRoute;
