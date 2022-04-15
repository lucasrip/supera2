import { useContext, useState } from "react"
import { JogoContainer } from "./style"
import { Context } from "../../Context/Auth"
import { Link } from "react-router-dom"

export default function Jogo({id,name,price,score,image})
{    

   const {setProdutoClicado} = useContext(Context)

    const altJogo = `imagem do jogo name ${name}`
   
    function guardaJogoClicado()
    {
        setProdutoClicado({id,name,price,score,image,altJogo})
    }

    return(
        <JogoContainer>
            
            <Link to={`/produto/${name}`}>
             <img 
              src={require(`../../assets/capas/${image}`)} 
              alt={altJogo} 
              title={altJogo}
              onClick={guardaJogoClicado}
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