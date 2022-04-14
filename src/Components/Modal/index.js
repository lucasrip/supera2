
import {ModalContainer,ModalConteudo} from './style';

import FecharIcon from '../../../src/assets/icons/fechar.png'; 

import Logo from '../../assets/logo/logo.png';

export default function Modal({display,controlaModal,children})
{

    return(
       <ModalContainer displayModal={display}>
            <ModalConteudo>
              <img src={Logo} alt="logo do ecommercer" />
              <img 
              src={FecharIcon} 
              alt="botão para fechar o modal"
              onClick={controlaModal}
              />
              {children}
            </ModalConteudo>
       </ModalContainer>
    )
}