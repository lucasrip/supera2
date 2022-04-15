
import { useContext,useState } from "react";
import Modal from "../Modal"
import { toast } from "react-toastify";
import storage from '../../storage';

import { ModalLogar } from "./style";
import { Context } from "../../Context/Auth";

export default function ModalLogin({display,controlaModal})
{
  const {setEstaLogado,setUserLogado} = useContext(Context);

  const [nome,setNome] = useState('');
  const [senha,setSenha] = useState('');
   
  function logar(e)
  {
    e.preventDefault();
    const user = storage.findUser(nome,senha);

    
     if(typeof user === 'object')
     {
        toast.success(`logado com successo !!\n
        Seja Bem Vindo ${user.nome}`, 
        {
         theme:"colored",
         position: "top-right",
         autoClose: 4000,
         closeOnClick: true,
         pauseOnHover: true,
        })
        setEstaLogado(true);
        setUserLogado(user);      
        controlaModal();
        setNome('');
        setSenha(''); 
     }
     else
     {
        toast.error(user, 
            {
             theme:"colored",
             position: "top-right",
             autoClose: 4000,
             closeOnClick: true,
             pauseOnHover: true,
            })
            
     }
    
  }

    return(
        <Modal display={display} controlaModal={controlaModal}>
            <ModalLogar>
                <label htmlFor="nome">
                    nome
                   <input 
                    type="text" 
                    name="nome" 
                    onChange={e=>setNome(e.target.value)}
                    value={nome}
                    />
                </label>
                <label htmlFor="senha">
                   senha
                   <input 
                    type="password" 
                    name="senha" 
                    onChange={e=>setSenha(e.target.value)}
                    value={senha}
                    />
                </label>
                <button onClick={e=>logar(e)}>
                    logar
                </button>
            </ModalLogar>
        </Modal>
    )
}