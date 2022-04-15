import { Link } from 'react-router-dom';
import {FooterContainer } from './style';
import Logo from '../../assets/logo/logo.png';

import Up from '../../assets/icons/up.png';

export default function Footer()
{
  function voltaTopo()
  {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }) 
  }
    return(
        <FooterContainer>
              <Link to="/">
               <img src={Logo} alt="logo do nosso Ecommercer" />
              </Link>
            <span>
              &#169; Todos os direitos Reservados
            </span>
            <img 
             onClick={voltaTopo}
             className='voltarTopo' 
             src={Up} alt="voltar para o topo" 
             title="voltar para o topo" 
          />
        </FooterContainer>
    )
}