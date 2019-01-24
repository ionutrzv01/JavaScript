const select = document.getElementById('select');                   ///Rase pisici
const card = document.getElementById("poza");
var img = document.createElement("img");
card.appendChild(img);





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
    .then( (data) => lista(data) );                                 ///Rase pisici



    ///poza
    
    
img="https://www.kimballstock.com/pix/COU/01/COU_01_DB0012_01_P.JPG";