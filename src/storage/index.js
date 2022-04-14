
class Storage
{
   getUsers()
   {
     const users =localStorage.getItem('users');   
     return JSON.parse(users); 
   }

   setUser(user)
   {
       const users = this.getUsers()||[];
       localStorage.setItem('users',JSON.stringify([...users,user]))
   }

   findUser(nome,senha)
   {
      const users = this.getUsers()||[];

     
      const user =users.filter(user =>user.nome === nome && user.senha === senha)
      if(user.length !== 0)
      {
        return {...user[0],logado:true}
      }
      else
      {
        return `
                 usuario não encontrado \n
                 algum campo esta errado
                 ou vazio
                `
      }

    }

}

export default new Storage;