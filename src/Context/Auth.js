
import { createContext,useState} from "react";

export const Context = createContext({});

export const AuthProvider = (props) =>
{
    const [produtos,setProdutos]= useState([]);
    const capas= {};

    function importAll(pasta,capas) 
    {
     pasta.keys().forEach((imagem) =>(capas[imagem] = pasta(imagem)));
    }
  
      
    importAll(require.context('../assets/capas', true, /\.png$/),capas);
   console.log(capas)




  return(
     <Context.Provider value={{setProdutos,produtos}}>
        {props.children}
     </Context.Provider>
 )
}



