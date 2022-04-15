import styled from 'styled-components';


export const FooterContainer = styled.footer`

display:flex ;
padding:0 20px ;
background-color: black;
justify-content:space-between ;
align-items:center ;
width:'100%';
height: auto;
img
{
    width: 7rem ;
    height: 7rem ;
    
}
span
{
    color:#fff;
    font-family: 'Akshar', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    margin-right: 40% ;
}
.voltarTopo
{
 position: fixed;
 width: 3rem;
 height: 3rem;
 right: 30px;
 bottom: 30px;
 cursor: pointer;
 
}
@media (max-width:900px)
{
    span
    {
        margin-right: 0px ;
    }
    
}
`;