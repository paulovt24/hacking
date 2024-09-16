import con from "./connection.js";

export async function inserirUser(pessoa){
    const comando = `
    insert into tb_user (ds_login, ds_password) 
                    values ( ?, ?);
    
    `

    let resposta= await con.query(comando, [pessoa.login, pessoa.password])

    let registro= resposta[0];
    return registro.insertId

}
export async function consultarUser(){

    const comando= `
    
           select  ds_login      login,
                   ds_password   password
              from tb_user;
              `

              let resposta= await con.query(comando)
              let registros= resposta[0]
              return registros

}


export async function alterarUser(id, pessoa){

const comando= `

update tb_user 
   set ds_login = ?,
       ds_password = ?
 where id_user = ?;

`
let resposta= await con.query(comando,[pessoa.login, pessoa.password, id] )

let registros= resposta[0]
return registros.affectedRows;

}




export async function deletarUser(id){

const comando= `

delete from tb_user 
      where id_user = ?;
      
      `

      let resposta= await con.query(comando, [id])
      let registros= resposta [0]
      return registros.affectedRows;


}