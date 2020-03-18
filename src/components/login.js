import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import USER_LOGIN from '../graphql/queries/login';
import LeftContainer from '../container/LeftContainer';
import RightContainer from '../container/RightContainer';

const Login = () => {
    const [ attributes, setAttributes ] = useState({});

    // eslint-disable-next-line no-unused-vars
    const [signIn, {data, error}] = useMutation(USER_LOGIN);
    const handleChanges = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn({
            variables: {
                email: attributes.email,
                password: attributes.password,
            },
        });
    }

    return (
        <div className="container">
            <div className="container__content">
                <LeftContainer />
                <RightContainer
                    handleChanges={handleChanges}
                    handleSubmit={handleSubmit}
                    data={data}
                />
            </div>
        </div>
        );
}
 
export default Login;