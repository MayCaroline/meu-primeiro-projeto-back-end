const express = require ('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid') //aqui estou usando a biblioteca pra gerar um id automatico

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 //aqui estou criando a porta

//
const mulheres = [ //usando colchetes para fazer uma lista, estou criando uma lista inicial
   {
     id: '1',
     nome: 'Simara Conceição', 
     imagem:'https://github.com/simaraconceicao.png',
     minibio: 'Desenvolvedora e instrutora',
   },

    {
     id:'2',
     nome: 'Iana Chan',
     imagem: 'https://bit.ly/3JCXBqP',
     minibio: 'CEO & Founder da PrograMaria',
   },

   {
    id:'3',
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
   }
]

//aqui chamando GET
function mostraMulheres(request, response){
 response.json(mulheres)     
} 

//criando meu POST
function criaMulher(request, response){
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher) 
  response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
 
    if (mulher.id === request.params.id) {
       return mulher
 
    }
 
  }
  const mulherEncontrada = listaDeMulheres.find(encontraMulher)
  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome
   }
  
  if (request.body.minibio) {
     mulherEncontrada.minibio = request.body.minibio
   }
 
   if (request.body.imagem) {
     mulherEncontrada.imagem = request.body.imagem
   }

   response.json(mulheres)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei a rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))

//criando a função para mostrar no localhost
function mostraPorta() {
  console.log('Servidor criado e rodando na porta ', porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta

//o GET é o unico verbo que agt consegue testar pelo navegador, pq por padrão toda requisiçao acontece um GET. O POST precisa usar uma ferramenta extra.