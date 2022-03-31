import React, {/*useEffect*/} from 'react';
import BtnLogin from './BtnLogin';
//import {collection, getDocs} from 'firebase/firestore';
//import {projectFirestore} from '../firebase/config';

const Title = () => {

  return (
    <div className="title">
      <h1>
          AndiGram
          <BtnLogin />
      </h1>
      <h2>Your Pictures</h2>
      <p>These are your pictures. Enjoy'em.</p>
    </div>
  )
}

export default Title;