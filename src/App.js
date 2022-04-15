import { BrowserRouter } from "react-router-dom";

import {GlobalStyle} from './styles/globalStyles.js';
import {AuthProvider} from './Context/Auth';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

import Header from './Components/Header';
import Footer from './Components/Footer';

import Routes from './Routes/index';

export default function App() {
  
  return ( 
     <BrowserRouter>
      <AuthProvider>
         <GlobalStyle/>
         <Header/>
           <Routes/>
         <Footer/>
         <ToastContainer/>   
       </AuthProvider>
     </BrowserRouter>
  )
}