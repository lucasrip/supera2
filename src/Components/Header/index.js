import { HeaderContainer ,UserStatus} from './style'
import Logo from '../../assets/logo/logo.png';
import User from '../../assets/icons/user.png';

export default function Header()
{
    return(
        <HeaderContainer>
            <img src={Logo} alt="" />
            <UserStatus>
                <button>
                    Cadastrar
                </button>
                <button>
                    Login
                </button>
            </UserStatus>
        </HeaderContainer>
    )
}