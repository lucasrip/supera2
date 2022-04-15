import styled from 'styled-components';


export const ModalCadastrar = styled.div`

  display:flex;
  flex-direction: column ;
  justify-content: center ;
  align-items:center;
  margin-left:20px ;

  label
  {
      font-family: 'Fira Sans', sans-ser;
      font-weight: bold;
      margin-bottom: 10px;
      input
      {
          width: 12rem;
          height: 2rem;
          margin-left:30px ;
          font-size: 1.2rem;
          padding-left:5px ;
      }
     
  }
  label:nth-child(2)
  {
    input
      {
          margin-left:42px ;
      }
  }
  button
  {
    cursor: pointer;
    background: transparent;
    border:1px solid  #0B47A9;
    width: 10rem;
    height: 2.5rem;
    font-family: 'Fira Sans', sans-ser;
    font-weight: bold;
    border-radius:10px;
  }
  @media (max-width:670px)
  {
     label
     {
        input
      {
          width: 8rem;
          height: 1.5rem;
      }
     } 
  }
  @media (max-width:420px)
  {
    
     label
     {
        input
      {
          width: 5rem;
          height: 1rem;
      }
     } 
  }
`;

