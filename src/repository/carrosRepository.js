import con from "./connection.js";

export async function inserircarros(carro){
    const comando = `
    insert into tb_carro (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
      values (?, ?, ?, ?, ?, ?)

    `

    let resposta= await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.image, carro.inclusao])

    let registro= resposta[0];
    return registro.insertId

}
export async function consultarcarros(){

    const comando= `
    
           select  ds_marca       marca,
                   ds_modelo      modelo,
                   nr_ano         ano,
                   vl_preco       preco,
                   img_carro      imagem,
                   dt_inclusao    inclusao  
              from tb_carro;
              `

              let resposta= await con.query(comando)
              let registros= resposta[0]
              return registros

}


export async function alterarcarros(id, carro){

const comando= `

update tb_carro
   set ds_marca = ?,
       ds_modelo = ?,
       nr_ano = ?,
       vl_preco = ?,
       img_carro = ?,
       dt_inclusao = ?
 where id_carro = ?;

`
let resposta= await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.image, carro.inclusao, id] )

let registros= resposta [0]
return registros.affectedRows;

}
export async function alterarimagem(id, caminho){

const comando= `

update tb_carro
   set img_carro = ?
 where id_carro = ?;

`
let resposta= await con.query(comando, [caminho, id] )

let registros= resposta [0]
let linhasAfetadas= registros.affectedRows
return linhasAfetadas;

}


export async function deletarcarros(id){

const comando= `

delete from tb_carro 
      where id_carro = ?;
      
      `

      let resposta= await con.query(comando, [id])
      let registros= resposta[0]
      return registros.affectedRows;


}