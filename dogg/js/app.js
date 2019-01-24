
// ENDPOINT-uri Dog API:
// imagine random: https://dog.ceo/api/breeds/image/random
// toate rasele: https://dog.ceo/api/breeds/list
// imagine random dintr-o rasa: https://dog.ceo/api/breed/{nume_rasa}/images/random

// Referinte la elementele necesare din HTML
const select = document.getElementById('breeds'); // <select>
const card = document.querySelector('.card'); // <div>
const form = document.querySelector('form'); // <form>
var img = document.createElement("img");
card.appendChild(img);
// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1: exploreaza in consola un response HTTP de la server
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data.message));

// PAS 2: obtine o imagine random (https://dog.ceo/api/breeds/image/random) 
// Apeleaza functia custom generateImage, care afiseaza raspunsul in <div>  
function generateImage(x){
img.src = x;
};

// PAS 3: obtine o lista de rase de caini (https://dog.ceo/api/breeds/list)
// Apeleaza functia custom generateOptions, care afiseaza raspunsul in <select> 
function lista(dog){
    for(i = 0; i < dog.message.length; i++){
        var lista = document.createElement('option');
        lista.value = dog.message[i];
        lista.innerHTML = dog.message[i];
        select.appendChild(lista);
    }
}

var newVar = fetch('https://dog.ceo/api/breeds/list')
.then(res => res.json() )
.then(data => lista(data) );
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// PAS 4: la schimbarea optiunii din <select> afiseaza o imagine din rasa selectata
select.addEventListener("change", (func) =>
{ fetch('https://dog.ceo/api/breed/' + select.value + '/images/random')
.then(res => res.json())
.then(data => generateImage(data.message));
});

// PAS 5: la click in interiorul <div>-ului afiseaza alta imagine din rasa selectata

card.addEventListener("click", (func) =>
{ fetch('https://dog.ceo/api/breed/' + select.value + '/images/random')
.then(res => res.json())
.then(data => generateImage(data.message));
});

// PAS 6: Creati o functie fetchData(url) care sa automatizeze primii doi pasi dintr-un request 
// (trimiterea request-ului si parsarea raspunsului JSON)
function fetchData(url){
fetch(url)
.then(res => res.json())
.then(data => generateImage(data.message))
.catch(Show);
};
fetchData("https://dog.ceo/api/breeds/image/random", generateImage);
// PAS 7 - atasati cu metoda .catch() un handler care sa afiseze in consola un mesaj custom de eroare 
// si eroarea primita de la server. Ca sa va asigurati ca functioneaza, schimbati url-ul catre care
// trimiteti request-ul cu unul gdatait.
function Show(error){
    alert("Error");
    alert(error);
}

// ------------------------------------------
//  POST DATA
// ------------------------------------------


// PAS 9 - Transmiteti datele completate in formular printr-un request POST, catre https://jsonplaceholder.typicode.com/posts 
// Printati in consola raspunsul primit de la server, impreuna cu un mesaj custom.  




// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// generateImage(src, alt)
// Functie custom, care afiseaza o imagine in interiorul <div>-ului  


// generateOptions(data)
// Functie custom, care completeaza optiunile din <select>


