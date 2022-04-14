import {FooterContainer } from './style';
import Logo from '../../assets/logo/logo.png';


export default function Footer()
{
    return(
        <FooterContainer>
            <img src={Logo} alt="logo do nosso Ecommercer" />
            <span>
              &#169; Todos os direitos Reservados
            </span>
        </FooterContainer>
    )
}