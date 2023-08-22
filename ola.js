const express = require ('express')
const router = express.Router() //tem q abrir e fechar parenteses pois é uma função

const app = express()
const porta = 3333

function mostraOla(request, response){
    response.send('Olá, mundo!')
} //para fazer uma requisição e enviar uma resposta usa os parametros request e response


function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}
app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)