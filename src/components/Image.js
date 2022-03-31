import React, { useContext } from "react";
import { motion } from 'framer-motion';
import LoginContext from "../contexts/loginCtxt";



const Image = ({url, name}) => {
    const {loginData} = useContext(LoginContext);
    return (
        
        <>
        <motion.img src={url} alt={name} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
        />
        {
            loginData.username && <div className=""><button>♨️</button></div>
        }
        </>
    );
}

export default Image;