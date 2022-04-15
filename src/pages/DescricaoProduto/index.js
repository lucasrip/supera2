import { toast } from 'react-toastify';

import { useContext} from 'react';
import { Context } from '../../Context/Auth';
import { Link } from 'react-router-dom';

import { DescricaoJogoContainer,Capa,InfoJogo,JogoNaoEncontrado} from './style';

import Sony from '../../assets/icons/sony.png';
import Nintendo from '../../assets/icons/switch.png';
import Wifi from '../../assets/icons/wifi.png';
import Globo from '../../assets/icons/globo.png';

import NaoEncontrado from '../../assets/icons/question.png';

import LinksTrailer from './linksJogos';

export default function DescricaoProduto()
{ 

  const {produtos,estaLogado} = useContext(Context);


  function verificaLogin()
  {
    estaLogado?
    toast.success('jogoa dicionado com sucesso no carrinho', 
    {
     theme:"colored",
     position: "top-right",
     autoClose: 4000,
     closeOnClick: true,
     pauseOnHover: true,
    })
  :
  toast.error(`para poder adicionar o jogo ao carrinho\n
  voce precisa estar logado
  `, 
  {
   theme:"colored",
   position: "top-right",
   autoClose: 4000,
   closeOnClick: true,
   pauseOnHover: true,
  })
   

  }
   
  const urlJogoName = window.location.href.split('/')[4].split("%20").join(" ");

  const jogo = produtos.filter(produto=> produto.name === urlJogoName )

   const {name,image,price,score,altJogo} = jogo[0] || [];

   const procuraLinkJogo = LinksTrailer.filter(link => link.name === urlJogoName)
   
   const {link}= procuraLinkJogo[0]; 
  
    const pegaImage = image!= undefined?require(`../../assets/capas/${image}`):'';

   return(
        <DescricaoJogoContainer>
            {
                urlJogoName !== ""?
                <>
                <Capa>
              <img src={pegaImage} alt={altJogo} />
              
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
                    <button onClick={verificaLogin}>
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
               </>
                :
                <JogoNaoEncontrado>
                    <img src={NaoEncontrado} alt="icone jogo nao encontrado" />
                    <h1>
                        jogo nao encontrado<br/> por favor volte para a<br/>  
                        {
                        <Link to="/">
                             home
                        </Link>
                        }
                    </h1>
                </JogoNaoEncontrado>
            }
          
        </DescricaoJogoContainer>
    )
}