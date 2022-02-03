import { useState, useEffect } from "react";
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //referencias
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bitesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err)
        }, async () => {
            const dwnUrl = await storageRef.getDownloadURL();  
            setUrl(dwnUrl);
        })
    }, [file]);

    return { progress, url, error}
}

export default useStorage;