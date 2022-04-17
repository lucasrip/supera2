import axios from "axios";

import { createContext,useState,useEffect} from "react";

export const Context = createContext({});

export const AuthProvider = (props) =>
{
    const [produtos,setProdutos]= useState([]);
    const [estaLogado,setEstaLogado]= useState(false);
    const [userLogado,setUserLogado]= useState({});
    const [produtosCarrinho,setProdutosCarrinho]= useState([]);

    useEffect(()=>{

      const api = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220417T094146Z&X-Amz-Expires=86400&X-Amz-Signature=55f119146642fb862e6a489cbedab236a98345c80f8fd04710229d05a869ce71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject";
    
      axios.get(api)
      .then((response)=>{
       setProdutos(response.data) ;
      })
      .catch((err)=>{
        console.log(err)
      })
     },[setProdutos]) 


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
        }}>
        {props.children}
     </Context.Provider>
 )
}



