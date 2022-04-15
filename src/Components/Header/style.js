import styled from 'styled-components'


export const HeaderContainer = styled.header`
position:relative;
display:flex ;
padding:0 20px ;
justify-content:space-between ;
align-items:center ;
width:'100%';
height: auto;
background: white;
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

export const UserLogado = styled.div`
   position: relative ;
   
   display:flex ;
   justify-content:center ;
   align-items:center ;
   width: auto;
   height: auto;
   img
   {
    width: 4rem ;
    height: 4rem ;
    cursor: pointer;
    
    }
    img:last-child
    {
       margin-left:15px;
    }

`;

export const UserConfig = styled.div`
   display: ${props=> props.display?'flex':'none'};
   position:absolute ;
   top: 85px ;
   left:-100px;
   padding:10px ;
   background-color:#fff;  
   width: 15rem;
   height: auto;
   flex-direction: column ;
   z-index: 10000;
   font-size: 0.9rem ;
   font-family: 'Fira Sans', sans-ser;
   border-radius:5px;
   border: 1px solid #00CCFF;
   &::before
   {
       display:block ;
       position: absolute ;
       top:-9px;
       right:32% ;
       content:'';
       z-index:20000 ;
       border-left:30px solid transparent;
       border-right:30px solid transparent;
       border-bottom:10px solid #00CCFF;

   }
   span
   {
       margin-top:7px ;
       text-align: left ;
       strong
       {
           margin-left: 10px;
       }
   }
   div
   {
       position:absolute;
       width:100% ;
       img
       {
           position: absolute;
           right: 10px;
           width:2rem;
           height:2rem ;
       }
   }
`;