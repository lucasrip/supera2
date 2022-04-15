import {useContext,useEffect} from 'react';
import {HomeContainer} from './style.js';
import { Context } from '../../Context/Auth';
import axios from "axios";
import Jogo from '../../Components/Jogo';

export default function Home()
{
  const {setProdutos,produtos} = useContext(Context);

  useEffect(()=>{

        const api = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220414T114120Z&X-Amz-Expires=86400&X-Amz-Signature=5daea0ce7827d6bbfe518a036640372c81bb517db3b3dc3e2fa4a4ae0ab5da8a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject";
      
        axios.get(api)
        .then((response)=>{
         setProdutos(response.data) ;
        })
        .catch((err)=>{
          console.log(err)
        })
  },[setProdutos]) 



  return(
     <HomeContainer>
          {
           produtos.map(jogo=>{
             return(
               <div  key={jogo.id}>
                       <Jogo 
               id={jogo.id}
               name={jogo.name}
               price={jogo.price}
               score={jogo.score}
               image={jogo.image}
            />
               </div>
          
             )
           
           }) 
          }
       
     </HomeContainer>
  )
}