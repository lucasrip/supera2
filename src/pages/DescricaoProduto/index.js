import { toast } from 'react-toastify';

import { useContext,useEffect,useState} from 'react';
import { Context } from '../../Context/Auth';
import { Link } from 'react-router-dom';

import { DescricaoJogoContainer,Capa,InfoJogo,JogoNaoEncontrado} from './style';

import Sony from '../../assets/icons/sony.png';
import Nintendo from '../../assets/icons/switch.png';
import Wifi from '../../assets/icons/wifi.png';
import Globo from '../../assets/icons/globo.png';

import NaoEncontrado from '../../assets/icons/question.png';

import LinksTrailer from './linksJogos';

import Carrinho from '../../assets/icons/adicionarCarrinho.png';

export default function DescricaoProduto()
{ 
  const {produtos,estaLogado,produtosCarrinho,setProdutosCarrinho} = useContext(Context);
  const [jogoJaEstaNocarrinho,setJogoJaEstaNocarrinho] = useState(false);
 
  const urlJogoName = window.location.href.split('/')[4].split("%20").join(" ").replace("%C3%A9","é");

  const jogo = produtos.filter(produto=> produto.name === urlJogoName )

   const {name,image,price,score,altJogo} = jogo[0] || [];

   const procuraLinkJogo = LinksTrailer.filter(link => link.name === urlJogoName)
   
   const {link,background}= procuraLinkJogo[0]; 
   
   const pegaImage = image !== undefined?require(`../../assets/capas/${image}`):'';


  useEffect(()=>{
       const verificado =produtosCarrinho.some(produto => produto.name === name)
       if(verificado) setJogoJaEstaNocarrinho(true)
       else setJogoJaEstaNocarrinho(false)
  },[name,produtosCarrinho,setJogoJaEstaNocarrinho])



  function adicionaJogoNocarrinho()
  {   
   

    if( jogoJaEstaNocarrinho === false && estaLogado)
    {
        toast.success(`jogo adicionado com sucesso `, 
         {
          theme:"colored",
          position: "top-right",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
         })
        setProdutosCarrinho(prevs=>[...prevs,{...jogo[0],qtd:1,total:price}]);
        setJogoJaEstaNocarrinho(true);
    }

    if(jogoJaEstaNocarrinho === true)
    {
        toast.error(`o jogo ja esta no carrinho `, 
         {
          theme:"colored",
          position: "top-right",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
         })
    }

    if(estaLogado === false)
    {
        toast.error(`voce precisa estar logado \n para fazer compras no site`, 
        {
         theme:"colored",
         position: "top-right",
         autoClose: 4000,
         closeOnClick: true,
         pauseOnHover: true,
        })
    }
    
  }

  useEffect(()=>{

    setJogoJaEstaNocarrinho(false)

  },[estaLogado])
   
   return(
        <DescricaoJogoContainer background={background}>
            {
                urlJogoName !== ""?
                <>
                <Capa>
              <img src={pegaImage} alt={altJogo} />
              
          </Capa>
            
            <InfoJogo jogoJaEstaNocarrinho={jogoJaEstaNocarrinho}>
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
                   {
                          jogoJaEstaNocarrinho?

                          <button onClick={()=>adicionaJogoNocarrinho()} >
                             jogo ja esta no carrinho  
                          </button>
                          :
                          <button onClick={()=>adicionaJogoNocarrinho()} >
                          adicionar no carrinho
                          <img src={Carrinho} alt="iconde de adicionar ao carrinho" />
                          </button> 
                        
                   }
                </div>
              </InfoJogo>
              <iframe 
               width="560"
               height="315" 
               src={link} 
               title="YouTube video player" 
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