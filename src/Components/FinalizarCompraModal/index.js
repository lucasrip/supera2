import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Auth';
import { toast } from 'react-toastify';

import 
{ 
    FinalizarCompra,
    FinalizarCompraContainer,
    HeaderFinalizarCompra,
    ProdutosCarrinhoContainer,
    SemjogosNoCarrinho,
    ButtonContainer,
    JogoItem,
    ControlaQuantidade,
    JogoInfo
} from "./styles"


import LeftArrow from '../../assets/icons/leftArrow.png';
import Mais from '../../assets/icons/mais.png';
import Menos from '../../assets/icons/menos.png';


export default function FinalizarCompraModal({display,controlaModal})
{
    const {produtosCarrinho,setProdutosCarrinho} = useContext(Context);
    const [total,setTotal] = useState(0);

    useEffect(()=>{

        function CalculoFinal()
        {
             const valoresJogosCarrinho = produtosCarrinho.map(item=>item.total)
    
             const total = valoresJogosCarrinho.reduce((item,acc)=> acc+=item);

             setTotal(total.toFixed(2))
    
        }
        produtosCarrinho.length >= 1&&CalculoFinal();
    
       },[produtosCarrinho])
     

    function guardarQuantidade(novaQuantidade,name,price)
    {
       const encontraJogo = produtosCarrinho.filter(jogo=>jogo.name === name)[0];
       const excluiJogo = produtosCarrinho.filter(jogo=>jogo.name !== name);
       
       const atualizaCarrinho =produtosCarrinho.map(jogo=>{
        if(jogo.name === name)
        {
            return {...encontraJogo,qtd:novaQuantidade,total:novaQuantidade*price}
        }
        return jogo 
       })
        
       if(novaQuantidade <= 0)setProdutosCarrinho(excluiJogo);
        else
        {
        setProdutosCarrinho(atualizaCarrinho)
        }
      }

      function confirmaCompra()
      {

        setProdutosCarrinho([])
        toast.success("jogos Comprados com sucesso", 
            {
             theme:"colored",
             position: "top-right",
             autoClose: 4000,
             closeOnClick: true,
             pauseOnHover: true,
            })
      }
    
    return (
        <FinalizarCompraContainer displayModal={display}>
            <FinalizarCompra >
               <HeaderFinalizarCompra>
                   <img 
                    src={LeftArrow} 
                    alt="botao para voltar para home"
                    onClick={()=>controlaModal(display)}
                    />
                   <strong>
                       jogos no Carrinho
                   </strong>
               </HeaderFinalizarCompra>

               {
                 produtosCarrinho.length !== 0?
                 <ProdutosCarrinhoContainer>
                    {
                        produtosCarrinho.map(jogo =>{
                           
                            
                            return(
                                <JogoItem key={jogo.name}>
                                     <img 
                                        src={require(`../../assets/capas/${jogo.image||''}`)} 
                                        alt={`capa do jogo ${jogo.name}`} 
                                        title={`capa do jogo ${jogo.name}`}
                                         />
                                         <JogoInfo>
                                          <strong>
                                            {jogo.name}
                                          </strong>
                                          <span>
                                             preço
                                             <strong>
                                               ${jogo.price}
                                             </strong>
                                          </span>
                                          <ControlaQuantidade>
                                          <img 
                                            src={Menos} 
                                            alt="somar mais um jogo ao carrinho"
                                            onClick={()=>guardarQuantidade(jogo.qtd-1,jogo.name,jogo.price)}
                                            />            
                                            <input type="text"  value={jogo.qtd} readOnly/>
                                          <img 
                                            src={Mais} 
                                            alt="somar mais um jogo ao carrinho"
                                            onClick={()=>guardarQuantidade(jogo.qtd+1,jogo.name,jogo.price)}
                                           />        
                                         </ControlaQuantidade>
                                          </JogoInfo>
                                       
                                        
                                </JogoItem>
                            )
                        })
                    }
                 </ProdutosCarrinhoContainer>:
                 <SemjogosNoCarrinho>
                     <strong>
                         sem jogos no carrinho
                     </strong>
                 </SemjogosNoCarrinho>

               }
               {
                    produtosCarrinho.length !== 0&&
                    <ButtonContainer>
                        <span>
                            Total
                            <strong>
                                $ {total}
                            </strong>
                        </span>
                      <button onClick={()=>confirmaCompra()}>
                        comprar
                      </button>
                    </ButtonContainer>
                 
               }
            </FinalizarCompra>
        </FinalizarCompraContainer>
    )
}