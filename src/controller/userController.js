import * as db from '../repository/userRepository.js'

import { Router } from 'express'

const endpoints = Router();

endpoints.get ('/user/', async (req,resp) => {

    try {
        let registro = await db.consultarUser()
        resp.send (registro)
        
    }
     catch (err) {
        resp.status(404).send({
            erro : err.message
        })
    }
})
endpoints.post('/user/', async (req,resp) => {

    try {
        let pessoa = req.body;

        let id = await db.inserirUser(pessoa)

        resp.send({
            novoId: id
        })
        
    }
     catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put ('/user/:id', async (req,resp) => {

    try {
        let id = req.params.id
        let pessoa = req.body

        let linhasAfetadas = await db.alterarUser (id, pessoa);
        if (linhasAfetadas >=1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
        
    }
     catch (err) {
        resp.status(404).send({
            erro : err.message
        })
    }
})

endpoints.delete ('/user/:id', async (req,resp) => {

    try {
        let id = req.params.id
        let linhasAfetadas = await db.deletarUser (id);
        if (linhasAfetadas >=1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    
        
    }
     catch (err) {
        resp.status(404).send({
            erro : err.message
        })
    }
})

export default endpoints;
