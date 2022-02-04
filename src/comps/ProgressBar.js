import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    const { progress, url } = useStorage(file);
    console.log(progress, url);

    //hook para ocultar la barra de progreso:
    //dado que sólo se muestra cuando hay un "file", se setea a null 
    //en el momento en que firebase nos devuelve la url de la imagen,
    //que ocurre cuando se ha terminado de subir al repositorio
    useEffect(() => {
        if(url) setFile(null);
    }, [url, setFile])

    return (
        <div className='progress-bar' style={{ width: progress + "%"}}></div>
    );
}

export default ProgressBar;