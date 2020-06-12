//=========================//
//Iniciando a aplicação
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos= JSON.parse(localStorage.getItem('list_todos')) || []

/*[
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rockstar'
]; */

//==========================//
//Renderizando os Todos

/*function renderTodos(){
    for(todo of todos){
        console.log(todo)
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
        listElement.append(todoElement)
    }
}
renderTodos()*/

//==========================//
//Crindo Todos

function renderTodos(){
    //innerHTML tudo que tiver dentro da url
    listElement.innerHTML = ''
    for(todo of todos){
        console.log(todo)
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        //================================//
        //Excluindo Todos

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href','#')


        var pos = todos.indexOf(todo)// procurar o indice do todo
        linkElement.setAttribute('onclick','deleteTodo('+ pos+')')//conctenar as strings

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.append(todoElement)
    }
}
renderTodos()

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText)//push-> adicinoar um text no array de todos
    inputElement.value = ''//-> limpar a caixa de texto
    renderTodos()
    saveStorage()

}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)//remove uma quantidade de intes de um array que a gente passar
    renderTodos()
    saveStorage()
}

//===============================//
//Salvando no storage
//Usar o armazenamento local, local storage

function saveStorage(){

    //stringfy eh transformar o vetor de string em json
    //LocalStorage não armazena em vetor ou matriz, então usando a estrutura JSON
    localStorage.setItem('list_todos',JSON.stringify(todos))//localStorage -> variavel gloabl do local storage do PC

}