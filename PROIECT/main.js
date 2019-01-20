const select = document.getElementById('select');


function lista(pisica){
    for(i=0;i < pisica.length; i++){
        
        var lista = document.createElement('option');
        lista.response=pisica[i].name;
        lista.innerText=pisica[i].name;
        select.appendChild(lista);
        console.log(pisica[i].name);
    }
}


var newVar=fetch('https://api.thecatapi.com/v1/breeds')
    .then( (response) => response.json() )
    .then( (data) => lista(data) );