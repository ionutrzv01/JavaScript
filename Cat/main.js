const buton = document.getElementById("buton");
const select = document.getElementById('select');                   ///Rase pisici
const card = document.getElementById("poza");
const poz = document.getElementById("poz");
const buton1 = document.getElementById("boxes");
const buton2 = document.getElementById("clothes");
const buton3 = document.getElementById("hats");
const buton4 = document.getElementById("sinks");
const buton5 = document.getElementById("space");
const buton6 = document.getElementById("sunglasses");
const buton7 = document.getElementById("ties");
const buton8 = document.getElementById("gif");
const pisicute = document.getElementById("pisicute");
var img = document.createElement("img");
const butoane = [buton1, buton2, buton3, buton4, buton5, buton6, buton7, buton8];
const login = { headers: { "x-api-key": "7c59bf11-7fe0-4615-9ba0-327d59f34266" } };
const adrese = ["https://api.thecatapi.com/v1/images/search?category_ids=5&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=15&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=1&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=14&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=2&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=4&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=7&limit=5", "https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5"];

poz.style = "width:50%";
card.style = "width:50%";
generateImage("https://www.kimballstock.com/pix/COU/01/COU_01_DB0012_01_P.JPG");

card.appendChild(img);
function generateImage(x) {
    img.src = x;
    img.style = "width:100% "
}

function generateImage1(y) {
    var img = document.createElement("img");
    img.src = y;
    poz.appendChild(img);
    img.style = "width:45%"
}


function lista(pisica) {
    for (i = 0; i < pisica.length; i++) {
        var lista = document.createElement('option');
        lista.value = pisica[i].id;
        lista.innerText = pisica[i].name;
        select.appendChild(lista);
    }
}

var newVar = fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => lista(data));

select.addEventListener("change", (e) => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`, login)
        .then(res => res.json())
        .then(data => generateImage(data[0].url)
        );
});

card.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`, login)
        .then(res => res.json())
        .then(data => {
            if (img.src == generateImage(data[0].url)) { generateImage(data[0].url) }
        });
});



function butons(but, adresa) {
    but.addEventListener('click', (e) => {
        poz.innerHTML = "";
        fetch(adresa, login)
            .then(res => res.json())
            .then(data => {
                for (var i = 0; i < 6; i++) { generateImage1(data[i].url) }
            });
    })
};

for (i = 0; i < 9; i++) {
    butons(butoane[i], adrese[i]);
};


pisicute.addEventListener('change', (e) => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${pisicute.value}`, login)
        .then(res => res.json())
        .then(data => generateImage(data[0].url)
        );
});