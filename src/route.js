import React
    from 'react';

const SignUp = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp},
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin}
];

export default route;
