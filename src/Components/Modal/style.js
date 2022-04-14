import styled from "styled-components"


export const ModalContainer = styled.div`

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

export const ModalConteudo = styled.form`
padding:30px ;
display:flex ;
justify-content:center ;
align-items:center ;
position:relative;
width: auto;
height: auto;
background: #ffff;
border:3px solid #0b47a9;
border-radius:5px;
animation: mostraModal 2s  ease;
@keyframes mostraModal
{
    0%
    {
        top:-200%;
    }
    100%
    {
        top:0;
    }
}
img:first-child
{
  width:10rem;
    height: 10rem;
}
  img:nth-child(2)
  {
    position:absolute ;
    background: #ffff;
    top:-20px;
    right: -22px;
    padding: 10px;
    width:3rem;
    height: 3rem;
    border:2px solid #0b47a9;
    border-left:transparent;
    border-bottom:transparent ;
    border-radius:50%;
    cursor: pointer;

  }
  @media (max-width:670px)
  {
    img:first-child
    {
     width:7rem;
     height: 7rem;
    }
  }
`;