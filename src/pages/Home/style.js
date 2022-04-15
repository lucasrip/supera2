import styled from 'styled-components';

export const HomeContainer = styled.main`
position:relative;
width:100% ;
padding:30px;
height:auto;
display:grid ;
grid-template-columns:repeat(4,auto) ;
grid-gap:40px;
margin: auto;
justify-content:center ;

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
