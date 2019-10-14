//Conceitos
//Introdução

/*class List{
    constructor(){
        this.data = []
    }
    
    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super()

        this.usuario = 'Diego'
    }

    mostraUsuario(){
        console.log(this.usuario)
    }
    //constructor(){
    //    this.todos = []
    //}

    //addTodo(){
    //    this.todos.push("Novo Todo")
    //    console.log(this.todos)
    //}
}

var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick= function(){
    MinhaLista.add('Novo Todo')
}

MinhaLista.mostraUsuario()*/

/*class TodoList{
    constructor(){
        this.todos = []
    }
    static addTodo(){
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}
//metood estatico ele não olha os this.dodos, ele so recebe e
//passa informações

class Matematica{
    static soma(a,b){
        return a+b
    }
}
console.log(Matematica.soma(10,2))//não precisa definir uma nova classe
*/


//Constantes, variaveis e escopo
/*const a = 1 //n pode ter se valor reatribuido, mas pode mutar
const usuario = {nome: 'Diego'}

usuario.nome = 'Cleiton' //mutar eh como atualizar

console.log(usuario)

//-> var de escopo
function test(x){
    let y  = 2//keyword para variaveis de escopo

    if(x>5){
        let y  = 4
        console.log(x,y)
    }
}

test(10)*/

//Operações com vetores

/*const arr = [1,3,4,5,6,7,8,9]

//map-> percorre o vetor
const newArr = arr.map(function(item){
    return item * 2
})//percorrer o vetor e multiplocar por 2
console.log(newArr)

const newArr = arr.map(function(item,index){
    return item + index
})//percorrer o vetor e multiplocar por 2
console.log(newArr)

//somar todos, percorrendo um por um
const sum = arr.reduce(function(total, next){
    return total + next
})
console.log(sum)
//0 4
//1 4

//1
//3

//procurar
const filter = arr.filter(function(item){
    return item %2 ===0
})
console.log(filter)

const find = arr.find(function(item){
    return item === 4
})
console.log(find)
*/

//Arrow functions
/*
const arr = [1,3,4,5,6]
const newArr = arr.map(function(item){
    return item * 2
})
const newArr = arr.map(item => item * 2)
console.log(newArr)

const teste = () => { 'teste'}
console.log(teste())

//chaves não pode pq eh usada como corpo da função
const teste1 = () => ({nome:'Diego'})
console.log(teste1())
*/

//Valores padrão
/*
//com isso,não precisa passar todos os parâmetros
const soma = (a = 3,b = 4) => a+b

console.log(soma(1))
console.log(soma())
*/

//Desestruturção de objetos
/*
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
console.log(usuario)

const {nome, idade, endereco:{cidade} } = usuario
console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({nome,idade}){
    console.log(nome,idade)
}
mostraNome(usuario)
*/

//Operadores rest/spread
/*
//REST
const usuario = {
    nome : 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const {nome,...resto} = usuario
console.log(nome)
console.log(resto)//pego o resto do array

const arr = [1,2,3,4]

const[a,b,...c] = arr

console.log(a)
console.log(b)
console.log(c)

function soma(a,b,...params){
    return params.reduce//somar os valores
}

console.log(soma(1,3,4))


//SPREAD: repassar as informações

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2]

console.log(arr3)

const usuario1 = {
    nome: 'Diego' ,
    idade: 23 ,
    empresa: 'Rocketseat' ,
}

const usaurio2  = {...usaurio1,nome: 'Gabriel'}

console.log(usuario2)
*/

//Template Literals
/*
const nome = 'Diego'
const idade = 23

//console.log('Meu nome é'+nome)
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
*/

//Object Short Syntax
//Sintaxe curta de objeto
/*
const nome = 'Diego'
const idade = 23

const usuario = {
    nome,
    idade,
    empresa: 'Rockeseat',
}

console.log(usuario)
*/

//WEBPACK SERVER
//Configurando o webpack

//mecher com várias arquivos js

// Import/export
//import {soma as somaFunction ,sub} from './funcoes'
//import soma,{ sub } from './funcoes'
import * as funcoes from './funcoes'
console.log(funcoes)
console.log(soma(1,2))
console.log(sub(4,2))
console.log(multi(4,2))

import soma from './soma'
console.log(soma(1,2))

//Webpack dev server














