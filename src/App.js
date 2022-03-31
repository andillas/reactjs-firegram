import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { LoginProvider } from './contexts/loginCtxt';

function App() {

  return (
      <div className="App">
            <LoginProvider>
                <Title/>
                <UploadForm />
                <ImageGrid/>
            </LoginProvider>
        </div>
  );
}

export default App;
