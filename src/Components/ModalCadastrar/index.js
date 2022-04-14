import { useState} from "react"
import Modal from "../Modal"
import { ModalCadastrar } from "./style"
import storage from "../../storage";

import { 
    verificaTexto,
    mascaraTell,
    verificaIdade,
    submit,
    mostraCadastroRealizado
} from "./funcoesModalCadastrar";



export default function ModalLogin({display,controlaModal})
{
   const [nome,setNome] = useState('');
   const [tell,setTell] = useState('');
   const [email,setEmail] = useState('');
   const [idade,setIdade] = useState('');
   const [senha,setSenha] = useState('');

   const [erros,setErros] = useState();

   function limpaCampos()
   {
    setNome('');
    setTell('');
    setEmail('');
    setIdade(''); 
    setSenha('');
  
   }


    return(
        <Modal display={display} controlaModal={controlaModal} method="post">
            <ModalCadastrar>
              <label htmlFor="nome">
                  nome
                  <input type="text"
                   name="nome" 
                   onChange={(e)=>setNome(verificaTexto(e.target.value))}
                   value={nome}
                   />
               </label>
               <label htmlFor="tell">
                    tell   
                   <input type="tell"
                   name="tell" 
                   onChange={(e)=>setTell(mascaraTell(e.target.value))}
                   value={tell}
                   maxLength="17"
                   placeholder="+11(13)1111-1111"
                   />
               </label>
               <label htmlFor="email">
                 email
                 <input 
                 type="email"  
                 name="email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                 />
               </label>
               <label htmlFor="idade">
                 idade
                 <input 
                 type="text"  
                 name="idade" 
                 onChange={(e)=>setIdade(verificaIdade(e.target.value))}
                 maxLength="3"
                 value={idade}
                 />
               </label>
               <label htmlFor="senha">
                 senha
                 <input 
                 type="password"  
                 name="senha" 
                 onChange={(e)=>setSenha(e.target.value)}
                 value={senha}
                 />
               </label>
               <button onClick={e=>{
                       setErros(submit(e,nome,senha,idade,email,tell));
                       
                       if(erros.every(erro=>erro === false))
                        {
                         mostraCadastroRealizado(controlaModal); 
                         limpaCampos();
                         storage.setUser({nome,senha,idade,email,tell});
                        }      
                }}>
                Cadastrar
                </button>

            </ModalCadastrar> 
        </Modal>
    )
}