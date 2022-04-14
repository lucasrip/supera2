import styled from "styled-components";

export const JogoContainer = styled.div`
 position:relative;
 display:flex ;
 flex-direction: column;
 width: 15rem;
 padding:0.4rem;
 height: auto;
 font-family: 'Roboto', sans-serif;
 text-align:center ;

 img
   { 
     width: 13rem ;
     height: 15rem;
     cursor: pointer;
   }
   span
   {
    display: flex ;
    justify-content:space-around ;
   } 
   
   strong
   {
       margin-top: 12px;
   }

 `;