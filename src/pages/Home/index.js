import {useContext} from 'react';
import {HomeContainer,JogosNaoEncontrados,ProdutosContainer } from './style.js';
import { Context } from '../../Context/Auth';
import Jogo from '../../Components/Jogo';
import { Ordena } from './ordena.js';

import icondeErro from '../../assets/icons/dead.png';

export default function Home()
{
  const {produtos} = useContext(Context);
  return(
     <HomeContainer>
          {
           produtos.length > 0?
           <>
             <Ordena/>
                <ProdutosContainer>
                 {

                   produtos.map((jogo)=>{
                    return(
                          
                           <Jogo key={jogo.id}
                                 name={jogo.name}
                                 price={jogo.price}
                                 score={jogo.score}
                                 image={jogo.image}
                            />
                         
                           )
                  })
                 }
                </ProdutosContainer>
           </>
         
           :
           <JogosNaoEncontrados>
             <img src={icondeErro} alt="icone de produto nao encontrado" />
             <h1>
             jogos nao encontrados por favor de reload na pagina
             </h1>
           </JogosNaoEncontrados> 
          }
       
     </HomeContainer>
  )
}