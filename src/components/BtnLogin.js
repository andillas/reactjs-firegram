import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import LoginContext from '../contexts/loginCtxt';

const BtnLogin = () => {
    const {loginData, doLogin, doLogout} = useContext(LoginContext);

    const loginHandler = () => {
        loginData.username ? doLogout() : doLogin();
    }
    
    return(
        <button onClick={loginHandler}>
            {
                loginData.username ? (
                    loginData.username
                    + ' logout'
                ):(
                    'login ♨️'
                )
            }
        </button>
    );
}

export default BtnLogin;