import React from 'react';

const Login = React.lazy(() => import('./Login'));

const LoginConfig = {
    route: {
        path: '/login',
        element: <Login />,
    },
};

export default LoginConfig.route;
