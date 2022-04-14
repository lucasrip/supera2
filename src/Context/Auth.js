
import { createContext,useState} from "react";

export const Context = createContext({});

export const AuthProvider = (props) =>
{
    const [produtos,setProdutos]= useState([]);
    const [estaLogado,setEstaLogado]= useState(false);
    const [userLogado,setUserLogado]= useState();
   
  return(
     <Context.Provider value={
        {
           setProdutos,
           produtos,
           estaLogado,
           setEstaLogado,
           userLogado,
           setUserLogado
        }}>
        {props.children}
     </Context.Provider>
 )
}



