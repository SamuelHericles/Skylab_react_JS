//NodeJS
//Criando estrutura
//Criando a primeira nota
//Utilizando Nodemon -> atualizar as requisiçoões
//Instalando o MongoDB
//Conectando Database
//Reestruturção de arquivos

//devDependias: dependencias apenas em ambiente de desenvolvimento
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())



// Iniciando o DB
//conexão com o banco de dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    {useNewUrlParser:true,
    useUnifiedTopology: true}
)
requireDir('./src/models')

//req -> conter os detalhes da requisição 
//res -> resposta que a gente vai dar
//Primeira rota
/*app.get("/",(req,res) => {
    Product.create({
        title:'React Native',
        description: 'Build native with react',
        url: 'http://gitbub.com/facebook/react-native'
     })
    res.send('Hello World2')
})*/

// Rotas
app.use('/api',require('./src/routes'))

app.listen(3001)//ouvir a porta 3001 do navegador

