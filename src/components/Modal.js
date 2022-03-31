import React from "react";
//import {motion} from 'framer-motion/dist/framer-motion';
//import {motion} from 'framer-motion/dist/es/index';
import { motion } from 'framer-motion';


const Modal = ({imageUrl, closeModal}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            closeModal(null);
        }
    }
    return (
        <motion.div
        initial={{opacity:0}}    
        animate={{opacity:1}}    
        className="backdrop" onClick={handleClick}>
            <motion.img
            initial={{y:'-100vh'}}
            animate={{y:0}}
            src={imageUrl} alt="Enlarged image" />
        </motion.div>
    );
}

export default Modal;