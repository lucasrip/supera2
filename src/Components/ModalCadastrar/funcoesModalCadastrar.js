import { toast } from "react-toastify";

export function verificaTexto(value)
 {
   const newValue =value
  .replace(/(\d)/,'')
  .replace(/\b([a-zA-Z])$/,(value = '$1') =>value.toUpperCase());  
   return newValue
 }

 export function mascaraTell(value)
 {
  const newValue = value
  .replace(/\D/g,'')
  .replace(/(\d{2})/,'$1(')
  .replace(/(\(\d{2})/,'$1)')
  .replace(/(\d{5})/,'$1-')
  .replace(/(-\d{4})\d+?$/,'$1')
  .replace('','+');
  return newValue
 }

 export function verificaIdade(value)
 {
  const newValue = value
  .replace(/\D/g,'')
   return newValue
 }

    export function submit(e,nome,senha,idade,email,tell)
   {   
     e.preventDefault();
     const erros = [];
   
     const validaEmail = /^[aA-zZ0-9.]+@[a-z0-9]+(\.com.br|.com)?$/i.test(email);
     
     if(nome.length < 5)mostraErro('o nome precisa ter mais caracteres',erros);
     
     if(idade.length ===0)mostraErro('voce precisa cadastrar a sua idade',erros);

     if(parseInt(idade) < 16)mostraErro(`voce nao tem a idade minima para \n ter cadastro
     neste site \n peça para seus pais criarem a conta`,erros)
     
     if(senha.length < 7) mostraErro(`a senha precisa ter no minimo 7 caracteres \n
      e no maximo 12`,erros);

      if(!validaEmail)mostraErro(`verifique o email digitado \n ele precisa ter 
        um host depois do @ por exemlo @gmail e depois \n do @gmail ter .com ou .com.br`,erros);
     
      if(tell.length <17)mostraErro('esta faltando numeros no campo tell',erros);
      
      return erros
   }

   function mostraErro(novoErro,erros)
   {
    
      toast.error(novoErro, 
                 {
                  theme:"colored",
                  position: "top-right",
                  autoClose: 4000,
                  closeOnClick: true,
                  pauseOnHover: true,
                 })
                 erros.push(true)
   }

    export function mostraCadastroRealizado(controlaModal)
   {
    
      toast.success('cadastro realizado com sucesso!!', 
                 {
                  theme:"colored",
                  position: "top-right",
                  autoClose: 4000,
                  closeOnClick: true,
                  pauseOnHover: true,
                 })      
                 controlaModal();    
   }

