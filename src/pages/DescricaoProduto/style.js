import styled from "styled-components";


export const DescricaoJogoContainer = styled.div`
position:relative;
display: flex ;
width:100% ;
height: auto;
padding: 20px 0px;
flex-direction:column ;
align-items: center;
iframe
{
    margin-top:30px;
}
@media (max-width:650px)
{
    iframe
    {
      width:25rem;
    }
}
`;

export const Capa = styled.div`
position:relative ;
display: flex ;
width:100% ;
align-items:center ;
height:auto;
margin-top: 4rem ;
font-family: 'Roboto', sans-serif;
font-size:4rem;
strong
{
    width:auto ;
}
 img
  {
    width:20rem;
    height: 20rem;
    object-fit:contain;
  }
`;

export const InfoJogo = styled.div`
display:flex ;
flex-direction: column ;
position:relative;
top:-60px;
left:-11.25rem;
width:45rem;
color: #fff;
background-color:black; 
font-family: 'Roboto', sans-serif;
font-size:1.3rem ;
border-radius:10px;
.iconsList
{
    width:100% ;
    margin:5px ;
    display: flex ;
    justify-content:space-between ;
    align-items:center;

    strong
    {
        flex:1 ;
      
    }
    div
    {
        flex:1 ;
    }
    img
    {
        width:2rem ;
        height:2rem ;
        margin-left: 10px;
    }
}
div
{
    width:100%;
    height:5rem ;
    display:flex ;
    justify-content: center ;
    padding:1rem ;
   button
  {
    cursor: pointer;
    background: #0B47A9;
    border:1px solid  #0B47A9;
    width: 15rem;
    height: 3.5rem;
    font-family: 'Fira Sans', sans-ser;
    font-size:1.1rem ;
    font-weight: bold;
    border-radius:10px;
    color: #fff;
    transition:background 0.5s ease ;
    &:hover
    {
        background: #042252;
    }
  } 
}

span
{
    margin-top:10px;
    margin-left:20px ;
    strong
    {
        margin-left: 5px;
    }
}


@media (max-width:1458px)
{
    width:40rem;
}
@media (max-width:1350px)
{
    width:30rem;
}
@media (max-width:1200px)
{
    width:25rem;
}
@media (max-width:1170px)
{
    left:0;
}
@media (max-width:1170px)
{
    top:10px;
}
`;