
import { useContext } from "react";
import { Context } from "../../Context/Auth";
import { DescricaoJogoContainer,Capa,InfoJogo} from "./style";

import Sony from '../../assets/icons/sony.png';
import Nintendo from '../../assets/icons/switch.png';
import Wifi from '../../assets/icons/wifi.png';
import Globo from '../../assets/icons/globo.png';

import LinksTrailer from './linksJogos';

export default function DescricaoProduto()
{
    
   const {produtoClicado} =useContext(Context);
  
   const {name,image,price,score,altJogo} = produtoClicado;

   const procuraLinkJogo = LinksTrailer.filter(link => link.name === name)
   
   const {link}= procuraLinkJogo[0]; 

   return(
        <DescricaoJogoContainer>
          <Capa>
              <img src={require(`../../assets/capas/${image}`)} alt={altJogo} />
              
          </Capa>
            
            <InfoJogo>
                <div className="iconsList">
                <strong>{name}</strong>
                    <div>
                        <img src={Sony} alt="logo da sony" />
                        <img src={Nintendo} alt="lodo do nintendo switch" />
                        <img src={Globo} alt="permitido em outros paises" />
                        <img src={Wifi} alt="multiplay" />  
                    </div>
                
                </div>

                <span>
                    preço
                    <strong>R$ {price}</strong>
                </span>
                <span>
                     score
                    <strong>{score}</strong>
                </span>
                <div>
                    <button>
                        adicionar no carrinho
                    </button> 
                </div>
              </InfoJogo>
              <iframe 
               width="560"
               height="315" 
               src={link} 
               title="YouTube video player" 
               frameborder="0" 
               >
               </iframe>
        </DescricaoJogoContainer>
    )
}