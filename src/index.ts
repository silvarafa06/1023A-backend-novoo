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
    if (process.env.DBPASSAWORD==undefined){
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
        password:process.env.DBPASSAWORD,
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
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});