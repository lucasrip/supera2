import styled from "styled-components"

import { useContext } from "react";
import { Context } from "../../Context/Auth";

const OrdenaProdutos = styled.select`
width:6rem ;
margin:30px ;
option
{
    background: white;
    border-radius:0px ;
}
`;

export function Ordena()
{
    const {produtos,setProdutos} = useContext(Context);

    function reordena(ordem)
    {
        let tipoOrdenaJogo = ordem.includes('preco')?'price':'score';
        tipoOrdenaJogo = ordem.includes('a-z')?'name':tipoOrdenaJogo;
        let novaOrdem;

        if(ordem.includes('menor') || ordem.includes('a-z'))
        {
            novaOrdem =  produtos.sort((item,proximoItem)=>{
             if(item[tipoOrdenaJogo] < proximoItem[tipoOrdenaJogo])return -1
             else return 1         
             }) 
        }
        else
        {
            novaOrdem =produtos.sort((item,proximoItem)=>{
             if(item[tipoOrdenaJogo] > proximoItem[tipoOrdenaJogo])return -1
             else return 1         
             }) 
        }
        setProdutos([...novaOrdem])  
    }


    return(
        <OrdenaProdutos onChange={(e)=>reordena(e.target.value)} value="filtro">
              <option value="filtro" disabled>
                  filtro
              </option>
              <option value="menor preco" >
                  menor preco
              </option>
              <option value="menor score" >
                  menor score
              </option>
              <option value="maior preco" >
                  maior preco
              </option>
              <option value="maior score" >
                  maior score
              </option>
              <option value="a-z" >
                  a-z
              </option>
              <option value="z-a" >
                  z-a
              </option>
        </OrdenaProdutos>
    )
}