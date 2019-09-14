/*
//================================//
//Requisições AJAX
//AJAX -> req assincrona que executa a algum back end
//fanzendo requisições ao servidor sem precisar atualiar a pagina

//iniciando um AJAX
var xhr = new XMLHttpRequest()//acesso a funco do ajax

//busca a url do github
xhr.open('GET','https://api.github.com/users/SamuelHericles')//obter um json da conta do github pela a api do git
xhr.send(null)

//A requisição que fazendo é assincrona, não é ao mesmo tempo e ele não espera a req terminar pra executar o resto do codigo
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}

//=================================//
//Promises
//codigo que não vão influenciar na linha do código de javascript
// codig que trabalho que js assincrono

var minhaPromise = function(){
    return new Promise( function(resolve,reject){
        //resolver -> o resultado da promise for um suceso
        //reject -> quando der errado a promise
        var xhr = new XMLHttpRequest()
        xhr.open('GET','https://api.github.com/users/SamuelHericles')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200 ){
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisçaõ')
                }
            }
        }
    })
}

var resultado = minhaPromise()//o js vai ler de baixo pra cima, mas quando chegar aqui ele volta para funçãõ antes, porém ele não espera ela termianr de executar,logo ele excuta a proxima e deixa como 'padding'
    .then(function(response){
        console.log(response)
    })//then -> eh invocado pelo o resolve, que é onde mostra a resposta de sucesso
    .catch(function(error){
        console.warn(error)
    })//catch -> metodo reject chama o metodo .catch
console.log(resultado)
*/



//=========================================//
//Utilizando Axios
//Biblioteca para fazer requisições assincronas no javascript

// Veja eh agora muito mais facil fazer requições na api do github
axios.get('https://api.github.com/users/SamuelHericles')
    .then(function(response){
        console.log(response.data.avatar_url)
    })
    .catch(function(error){
        console.log(error)
    })












