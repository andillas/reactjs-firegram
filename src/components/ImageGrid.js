import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import Image from './Image';
import Modal from './Modal';
const ImageGrid = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const {docs} = useFirestore('imagenes');

    return (
        <>
        <div className='img-grid'>
            { 
            docs && docs.map(doc => (
                <>
                <motion.div className='img-wrap' key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={ () => setImageUrl(doc.url)}
                    >
                    <Image url={doc.url} name={doc.name} />
                </motion.div>
                
                </>
            ))
            }
        </div>
        { imageUrl && <Modal imageUrl={imageUrl} closeModal={ setImageUrl }/> }
        </>
    );
}

export default ImageGrid;