import {useState, useEffect} from "react";
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const imagesRef = collection(projectFirestore, collectionName);
        const qAllImages = query(imagesRef, orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(
            qAllImages,
            (snapshot) => {
                let documents = [];
                snapshot.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            },
            (error) => {
                // ...
            });
        return () => unsubscribe();
        // this is a cleanup function that react will run when
        // a component using the hook unmounts... but I actually don't understand what that means (me)
        
      }, [collectionName]);

    return { docs }
}

export default useFirestore;