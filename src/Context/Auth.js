
import { createContext,useState} from "react";

export const Context = createContext({});

export const AuthProvider = (props) =>
{
    const [produtos,setProdutos]= useState([]);
    const [estaLogado,setEstaLogado]= useState(false);
    const [userLogado,setUserLogado]= useState({});
    const [produtoClicado,setProdutoClicado]= useState({});
    const [produtosCarrinho,setProdutosCarrinho]= useState([]);
   
  return(
     <Context.Provider value={
        {
           setProdutos,
           produtos,
           estaLogado,
           setEstaLogado,
           userLogado,
           setUserLogado,
           produtosCarrinho,
           setProdutosCarrinho,
           produtoClicado,
           setProdutoClicado
        }}>
        {props.children}
     </Context.Provider>
 )
}



