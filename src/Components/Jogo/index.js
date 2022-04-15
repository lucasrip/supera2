import { JogoContainer } from "./style"
import { Link } from "react-router-dom"

export default function Jogo({name,price,score,image})
{    
    const altJogo = `imagem do jogo ${name}`
   
    return(
        <JogoContainer>
            
            <Link to={`/produto/${name}`}>
             <img 
              src={require(`../../assets/capas/${image}`)} 
              alt={altJogo} 
              title={altJogo}
              />
            </Link>
        
            <strong>{name}</strong>
            <span>
               <p>
                 <strong>score </strong>  
                  {score}
                </p>
                <p>
                 <strong>preço </strong>  
                 R$ {price}
                </p>
                 
            </span>
            
        </JogoContainer>
    )
}