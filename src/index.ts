import 'dotenv/config'
import mysql from 'mysql2/promise';
console.log(process.env.DBUSER);

import express, {Request, Response} from 'express';
const app = express();


app.get('/', async (req:Request, res:Response)=> {
    if (!process.env.DBUSER){
        res.status(500).send("Variavel de ambiente DBUSER não está definida")
        return;
    }
    if (process.env.DBPASSWORD==undefined){
        res.status(500).send("Variavel de ambiente DBPASSAWORD não está definida")
        return;
    }
    if (!process.env.DBHOST){
        res.status(500).send("Variavel de ambiente DBHOST não está definida")
        return;
    }
    if (!process.env.DBNAME){
        res.status(500).send("Variavel de ambiente DBNAME não está definida")
        return;
    }
    if (!process.env.DBPORT){
        res.status(500).send("Variavel de ambiente DBPORT não está definida")
        return;
    }
    try{
        const connection = await mysql.createConnection({
        host: process.env.DBHOST,
        user : process.env.DBUSER,  
        password:process.env.DBPASSWORD,
        database:process.env.DBNAME,
        port:Number(process.env.DBPORT)
    })
    res.send("Conectado ao banco de dados com sucesso!");
    await connection.end();
    }
    catch(error){
        res.status(500).send("Erro ao conctar ao banco de dados" + error);
    }
});

// Criar uma rota get para produtos que retorna uma lista de produtos do banco de dados 
//O produto deve ter id, nome, urlfoto, preco e descricao
//Deve-se criar uma tabela no banco de dados AIVEN para amarzenar os produtos
//A resposta deve ser um array de produtos em formato json
//Crie o codigo SQL para criar a tabela de produtos
/*
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    urlfoto VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    descricao TEXT
);
Faz pelo menos 3 inserções nessa tabela
*/



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});