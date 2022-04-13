import styled from 'styled-components'


export const HeaderContainer = styled.header`
display:flex ;
padding:0 20px ;
justify-content:space-between ;
align-items:center ;
width:'100%';
height: auto;
img
{
    width: 7rem ;
    height: 7rem ;
    
}
`;

export const UserStatus = styled.div`
   width: auto;
   height: auto;
   button
   {
       border: 0;
       background: transparent;
       font-size: 1.2rem ;
       font-family: 'Fira Sans', sans-ser;
       cursor: pointer;
   }
   button:last-child
   {
       margin-left:25px;
   }
`;