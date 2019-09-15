var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var repos= JSON.parse(localStorage.getItem('list_nomes')) || []
var xhr = new XMLHttpRequest()//acesso a funco do ajax

function renderNomes(){
        listElement.innerHTML = '' // limpar o buffer
        for(repo of repos){
            var repoElement = document.createElement('li')
            var repoText = document.createTextNode(repo)

            var linkElement = document.createElement('a')
            linkElement.setAttribute('href','#')

            var pos = repos.indexOf(repo)
            linkElement.setAttribute('onclick','deleteRepo('+pos+')')

            var linkText = document.createTextNode('Excluir')
            linkElement.appendChild(linkText)
            repoElement.appendChild(repoText)
            repoElement.appendChild(linkElement)
            listElement.appendChild(repoElement)
        }
}
renderNomes()



function addNomes(){
    var repoText
    minhaPromise()
    .then(function(response){
        for ( var i = 0; i < response.length;i++){

            repoText = response[i].name
            //Até aqui
            repos.push(repoText)//push->add um text no array
            inputElement.value = ''//limpar a caixa de texto
            renderNomes()
    }
    })
    .catch(function(error){
        console.log(error)
    })    


}

var minhaPromise = function(){
    return new Promise( function(resolve,reject){
        //resolver -> o resultado da promise for um suceso
        //reject -> quando der errado a promise
        var xhr = new XMLHttpRequest()
        xhr.open('GET','https://api.github.com/users/'+inputElement.value+'/repos')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200 ){
                    resolve(JSON.parse(xhr.responseText))
                } else if(xhr.status === 404) {
                    reject('Error')
                }
            }
        }
    })
}

buttonElement.onclick = addNomes


function deleteRepo(pos){
    repos.splice(pos)//remove na possição dita
    renderNomes()
}
