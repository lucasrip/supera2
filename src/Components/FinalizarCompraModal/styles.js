import styled  from "styled-components";

export const FinalizarCompraContainer = styled.div`
position:relative;
display:${props => props.displayModal?'none':'flex'} ;
justify-content:center ;
align-items:center;
position:fixed ;
top:0 ;
left:0 ;
width:100% ;
height:100vh;
background-color:#00ccffbf; 
backdrop-filter: blur(3px);
backdrop-filter: grayscale(2px);
z-index: 1000;

`;

export const FinalizarCompra = styled.div`
position:fixed;
width: 26rem;
height:100%;
right:0 ;
top:0 ;
flex-direction: column;
padding:10px ;
background: white;
z-index:1000000 ;
border-left: 2px solid #0B47A9;
animation:mostraFinalizar 1s linear ;
overflow-y:auto ;
@keyframes mostraFinalizar {
   
    0%
    {
        right:-500px ;
    }
   
    100%
   {
    right:0px ;
   } 
}
`;

export const HeaderFinalizarCompra = styled.div`
position:relative ;
display: flex ;
justify-content:center ;
align-items:center ;
width:100%;
padding:10px 0px;
height:auto;

img
{
    position:absolute ;
    left: 15px ;
    width:2rem ;
    height:2rem ;
    animation: vaiVolta .8s infinite linear ;
    cursor: pointer;
    @keyframes vaiVolta {
   
    100%
    {
       left:5px;
    }
    }
}


strong
{
    font-size:1.3rem ;
}
`;

export const ProdutosCarrinhoContainer = styled.div`
width:100% ;
display:flex ;
flex-direction:column ;
height:auto ;
margin:20px 0px;
`

export const SemjogosNoCarrinho = styled.div`
width:100%;
height:auto ;
display:flex ;
margin-top: 10px;
justify-content: center ;
`;

export const ButtonContainer = styled.div`
display:flex ;
flex-direction: column ;
margin-top:20px ;
justify-content:center ;
align-items:center ;
width:100% ;
height:auto ;
margin:20px 0px;
span
{
    font-size:1.4rem ;
    strong
    {
        margin-left:15px ;
    }
}
button
{
    width: 15rem;
    height: 3rem;
    font-size:1.3rem ;
    font-family: 'Roboto', sans-serif;
    font-weight:bold ;
    border: 0px;
    border-radius:7px;
    color:#fff;
    background:#00FF38;
    transition: background 0.3s ease;
    cursor: pointer;
  &:hover
  {
    background: #23F038;
  }
}

`

export const JogoItem= styled.div`
display:flex;
width:100% ;
height:auto ;
margin:10px 0px;
img
{
    width:8rem;
    height:8rem ;

}

`

export const ControlaQuantidade =styled.div`
display:flex;
justify-content:start ;
align-items:center ;
width:100% ;
height:auto ;
margin:10px 0px;
input
{
    border:1px solid black ;
    text-align:center ;
    width:3rem ;
    height:2rem ;
    border-radius: 4px;
}
img
{
    width:1rem;
    height:1rem ;
    margin:0px 10px ;
}
`

export const JogoInfo = styled.div`
width:100% ;
display:flex ;
flex-direction:column ;
height:auto ;
strong
{
    font-size:1.1rem;
    font-family: 'Fira Sans', sans-serif;
    margin-left:10px;
}
span
{
    margin-left:10px ;
    margin-top:5px ;
    font-size:1.3rem;
}
`