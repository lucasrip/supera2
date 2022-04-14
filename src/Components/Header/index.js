import { useState} from 'react';
import { HeaderContainer ,UserStatus} from './style'

import Logo from '../../assets/logo/logo.png';
import User from '../../assets/icons/user.png';

import ModalCadastrar from '../ModalCadastrar';
import ModalLogar from '../ModalLogar';

export default function Header()
{
    const [cadastrarModalDisplay,setCadastrarModalDisplay] = useState(true);
    const [loginModalDisplay,setLoginModalDisplay] = useState(true);


    function controlaModalCadastrar() 
    {
        cadastrarModalDisplay?setCadastrarModalDisplay(false):
        setCadastrarModalDisplay(true)
    
    }

    
    function controlaModalLogar() 
    {
        loginModalDisplay?setLoginModalDisplay(false):
        setLoginModalDisplay(true)
    
    }
    

    return(
        <HeaderContainer>
            <img src={Logo} alt="logo do nosso Ecommercer" />
            <UserStatus>
                <button onClick={controlaModalCadastrar}>
                    Cadastrar
                </button>
                <button onClick={controlaModalLogar}>
                    Login
                </button>
            </UserStatus>


            <ModalCadastrar
             display={cadastrarModalDisplay}
             controlaModal={controlaModalCadastrar}
             />
            <ModalLogar
             display={loginModalDisplay}
             controlaModal={controlaModalLogar}
             />
             

        </HeaderContainer>
    )
}