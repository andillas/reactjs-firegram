import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
//import {motion} from 'framer-motion/dist/framer-motion';
//import {motion} from 'framer-motion/dist/es/index'
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
    const { progress, url } = useStorage(file);
    //console.log(progress, url);

    //hook para ocultar la barra de progreso:
    //dado que sólo se muestra cuando hay un "file", se setea a null 
    //en el momento en que firebase nos devuelve la url de la imagen,
    //que ocurre cuando se ha terminado de subir al repositorio
    useEffect(() => {
        if(url) setFile(null);
    }, [url, setFile])

    return (
        <motion.div className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
        ></motion.div>
    );
}

export default ProgressBar;