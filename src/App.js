import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  RouterProvider,
} from "react-router-dom";
import { checkToken } from './lib/Authenticator';

/* existing imports */
import {router} from './routes/router';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

function App() {
  
  checkToken();
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
