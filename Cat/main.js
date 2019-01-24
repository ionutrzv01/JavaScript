const select = document.getElementById('select');                   ///Rase pisici
const card = document.getElementById("poza");
var img = document.createElement("img");
card.appendChild(img);

function generateImage(x){
    img.src=x;
}
generateImage("https://www.kimballstock.com/pix/COU/01/COU_01_DB0012_01_P.JPG");


function lista(pisica){
    for(i=0;i < pisica.length; i++){
        
        var lista = document.createElement('option');
        lista.value=pisica[i].id;
        lista.innerText=pisica[i].name;
      
       
        
        

        select.appendChild(lista);
        
    }
}


var newVar=fetch("https://api.thecatapi.com/v1/breeds")
    .then( (response) => response.json() )
    .then( (data) => lista(data) );                                 ///Rase pisici



    ///poza
    
const buton=document.getElementById("buton");

buton.addEventListener("click",(func)=>{

fetch("https://api.thecatapi.com/v1/images/search?breed_id=" + select.value)
.then(res=>res.json())
.then(data=>generateImage(data.message));

}


);