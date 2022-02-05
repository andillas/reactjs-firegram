import React, {/*useEffect*/} from 'react';
//import {collection, getDocs} from 'firebase/firestore';
//import {projectFirestore} from '../firebase/config';

const Title = () => {
/*
useEffect(()=>{
  const obtenerDatos = async ()=>{
    const datos = await getDocs(collection(projectFirestore, "usuarios"));
    datos.forEach(col => {
      console.log(col.data())
    })
    
  }
  //obtenerDatos();
}, [])
*/

  return (
    <div className="title">
      <h1>AndiGram</h1>
      <h2>Your Pictures</h2>
      <p>These are your pictures. Enjoy'em.</p>
    </div>
  )
}

export default Title;