import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [imageUrl, setImageUrl] = useState(null)  

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setImageUrl={setImageUrl}/>
      { imageUrl && <Modal imageUrl={imageUrl} closeModal={ setImageUrl }/> }
    </div>
  );
}

export default App;
