import styled from 'styled-components';

export const HomeContainer = styled.main`
position:relative;
width:100% ;
padding:30px;
height:auto;
display:flex ;
justify-content: center ;
align-items:start ;
min-height: 60rem ;
`;

export const JogosNaoEncontrados = styled.div`
width:70%;
height:auto;
align-items:center ;
display:flex ;
justify-content:center;
text-align: left ;
font-family: 'Roboto', sans-serif;
font-size:1.3rem;
img
{
    width:20rem ;
    height:20rem;
}
@media (max-width:800px)
{
    font-size:1rem;
    img
    {
        width:10rem ;
        height:10rem;
    }
}
@media (max-width:500px)
{
    font-size:0.6rem;
    img
    {
        width:6rem ;
        height:6rem;
    }
}
@media (max-width:320px)
{
    flex-direction:column ;
    h1
    {
        margin-top:20px ;
    }
    
}
`;

export const ProdutosContainer =styled.div`
display:grid ;
grid-template-columns:repeat(4,auto) ;
grid-gap:40px;
margin: auto;
justify-content:center ;
position:relative;
@media (max-width:1100px)
{
    grid-template-columns:repeat(3,auto);
    grid-gap:25px;
}
@media (max-width:800px)
{
    grid-template-columns:repeat(2,auto);
    grid-gap:15px;
}
@media (max-width:600px)
{
    grid-template-columns:repeat(1,auto);
    grid-gap:15px;
}
`;