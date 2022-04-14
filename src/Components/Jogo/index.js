import { useContext, useEffect, useState } from "react"
import { JogoContainer } from "./style"
import { Context } from "../../Context/Auth"

export default function Jogo({id,name,price,score,image})
{    
    return(
        <JogoContainer>
            
            <img src={require(`../../assets/capas/${image}`)} alt="" />
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