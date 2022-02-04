/* eslint-disable default-case */
import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from '../firebase/config';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //referencias
        const storageRef = ref(projectStorage, file.name);
        //console.log(storageRef);
        //console.log(storageRef.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            //console.log("upload is ", progress + '% done');

            switch(snapshot.state){
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }

        }, error => {
            setError(error);
        }, async () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    console.log('File available at ', downloadURL);
                    setUrl(downloadURL);

                    try {
                        addDoc(collection(projectFirestore, "imagenes"), {
                          url: downloadURL,
                          createdAt: Timestamp.now().toDate()
                        }).then((t) =>{
                            console.log(t.id)
                            console.log(t);
                        });
                      } catch (e) {
                        console.error("Error adding document: ", e);
                      }

            })
        }
        )

        /*
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
        */
/*
        //const storageRefFile = storageRef(file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bitesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err)
        }, async () => {
            const dwnUrl = await storageRef.getDownloadURL();  
            setUrl(dwnUrl);
        })

        */
    }, [file]);

    return { progress, url, error}
}

export default useStorage;