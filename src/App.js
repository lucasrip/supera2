import {GlobalStyle,Container} from './styles/globalStyles.js';
import {AuthProvider} from './Context/Auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

import Header from './Components/Header';
import Home from './pages/Home';
import Footer from './Components/Footer';


export default function App() {
  
  return ( 
   <AuthProvider>
     <GlobalStyle/>
       <Header/>
       <Home/>
       <Footer/>
       <ToastContainer/>
   </AuthProvider>
  )
}