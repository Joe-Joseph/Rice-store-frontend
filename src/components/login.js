import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import USER_LOGIN from '../graphql/queries/login';
import LeftContainer from '../container/LeftContainer';
import RightContainer from '../container/RightContainer';

const Login = () => {
    const [ attributes, setAttributes ] = useState({});

    // eslint-disable-next-line no-unused-vars
    const [signIn, { data, error }] = useMutation(USER_LOGIN);

    const history = useHistory();
    const handleChanges = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    console.log("+++++++++++", attributes);

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn({
            variables: {
                email: attributes.email,
                password: attributes.password,
            },
        });
    };

    useEffect(() => {
        data
        && data.loginUser
        && data.loginUser.token
        && (
          localStorage.setItem('token', data.loginUser.token),
          localStorage.setItem('firstName', data.loginUser.firstName),
          history.push('/report')
        );
      });

    return (
        <div className="page-container">
            <div className="page-container__content margin-top-login">
                <LeftContainer userFirstName='Hello Friend!'/>
                <RightContainer
                    handleChanges={handleChanges}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
        );
}
 
export default Login;