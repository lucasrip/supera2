import {Routes,Route}  from "react-router-dom";

import Home from '../pages/Home';
import DescricaoProduto from "../pages/DescricaoProduto";

  export default function Rotas()
  {
  
      return(
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/produto/*" element={<DescricaoProduto/>} />
          </Routes>
      )
  }
    

