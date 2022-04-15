import { useState,useContext} from 'react';
import { HeaderContainer ,UserStatus,UserLogado, UserConfig} from './style'
import { Link } from 'react-router-dom';


import Logo from '../../assets/logo/logo.png';
import User from '../../assets/icons/user.png';
import Carrinho from '../../assets/icons/carrinho.png';
import Sair from '../../assets/icons/signout.png';

import { Context } from '../../Context/Auth';

import ModalCadastrar from '../ModalCadastrar';
import ModalLogar from '../ModalLogar';
import FinalizarCompraModal from '../FinalizarCompraModal';

export default function Header()
{
    const [cadastrarModalDisplay,setCadastrarModalDisplay] = useState(true);
    const [loginModalDisplay,setLoginModalDisplay] = useState(true);
    const [finalizaCompra,setFinalizaCompra] = useState(true);
    const [userConfig,setUserConfig] = useState(false);

    const { estaLogado,setEstaLogado,userLogado} = useContext(Context);

    function controlaModal(modal,setModal)
    {
        modal?setModal(false):setModal(true)
    }
       
    function deslogar()
    {
        controlaModal(userConfig,setUserConfig)
        setEstaLogado(false)
    }
   
    return(
        <HeaderContainer>
            <Link to="/">
              <img src={Logo} alt="logo do nosso Ecommercer" />
            </Link>
          

            {
                estaLogado === false?
              
                       <UserStatus>
                          <button
                           onClick={()=>controlaModal(cadastrarModalDisplay,setCadastrarModalDisplay)
                           }>
                                Cadastrar
                          </button>
    
                          <button 
                          onClick={()=>controlaModal(loginModalDisplay,setLoginModalDisplay)}
                          >
                                Login
                          </button>
                       </UserStatus>
                
                :
                <UserLogado>
                       <div>     
                         <img 
                         src={User}
                         onClick={()=>controlaModal(userConfig,setUserConfig)} 
                         alt="icone de usuario" 
                         />
                         <UserConfig display={userConfig}>
                             <span>
                                 nome
                                 <strong>
                                  {userLogado.nome}
                                 </strong>
                             </span>
                             <span>
                                 email 
                                 <strong>
                                   {userLogado.email}
                                 </strong>
                             </span>
                             <span>
                                 tell
                                 <strong>
                                  {userLogado.tell}
                                 </strong>
                             </span>
                             <span>
                                 idade
                                 <strong>
                                  {userLogado.idade}
                                 </strong>
                             </span>
                             <div>
                                 <img src={Sair} onClick={deslogar} 
                                 alt="deslogar da conta" 
                                 />
                             </div>
                         </UserConfig>
                    </div>
                    <img 
                    src={Carrinho} alt="carrinho de compras de jogo"
                    onClick={()=> controlaModal(finalizaCompra,setFinalizaCompra)}
                    />
                </UserLogado>
            }
           


            <ModalCadastrar
             display={cadastrarModalDisplay}
             controlaModal={()=>controlaModal(cadastrarModalDisplay,setCadastrarModalDisplay)}
             />
            <ModalLogar
             display={loginModalDisplay}
             controlaModal={()=>controlaModal(loginModalDisplay,setLoginModalDisplay)}
             />
             <FinalizarCompraModal 
             display={finalizaCompra}
             controlaModal={()=>controlaModal(finalizaCompra,setFinalizaCompra)}
             />

        </HeaderContainer>
    )
}