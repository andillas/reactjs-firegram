import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

const LoginContext = createContext();
const initialLogin = {
    username: null,
    role: null,
};
const LoginProvider = ({children}) => {
    const [loginData, setLoginData] = useState(initialLogin);
    
    const doLogin = () => { 
        setLoginData({username: 'Ujeen', role: 'admin'}) ;
    }
    const doLogout = () => {setLoginData({username: null, role: null})}

    const data = {loginData, doLogin, doLogout};
    return (
        <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    );
}

export default LoginContext;
export { LoginProvider };