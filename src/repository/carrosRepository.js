import con from "./connection.js";

export async function inserircarros(carro){
    const comando = `
    insert into tb_carro (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
      values ('Fiat', 'Uno', 2006, 30000.00, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grupolance.com.br%2Fveiculos%2Fcarros%2Fsp%2Fibitinga%2Ffiat-uno-mille-ano-2005-modelo-2006-duas-portas-cor-branco-18617&psig=AOvVaw0Sj2YwhjgH46duqwNKDQUg&ust=1725716770162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCc6ZO6rogDFQAAAAAdAAAAABAR', '2010-01-02 12:00')

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

update carro
   set ds_marca = ?,
       ds_modelo = ?,
       nr_ano = ?,
       vl_preco = ?,
       img_carro = ?,
       dt_inclusao = ?
 where id_carro = ?;

`
let resposta= await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.image, carro.inclusao] )

let registros= resposta [0]
return registros.affectedRows;

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