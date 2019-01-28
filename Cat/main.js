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
var img = document.createElement("img");


card.appendChild(img);
function generateImage(x) {
    img.src = x;
    img.style = "width:100% "
}

function generateImagegif(z) {
    var img1 = document.createElement('img')
    img1.src = z;
    img1.setAttribute("src", "gif_path");
    poz.appendChild(img1);
}

function generateImage1(y) {
    var img1 = document.createElement("img");
    img1.src = y;
    poz.appendChild(img1);
    img1.style = "width:45%"

}
poz.style = "width:50%";


card.style = "width:50%";
generateImage("https://www.kimballstock.com/pix/COU/01/COU_01_DB0012_01_P.JPG");


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
    .then((data) => lista(data));                                 ///Rase pisici

////login

const login = { headers: { "x-api-key": "7c59bf11-7fe0-4615-9ba0-327d59f34266" } };
///poza

select.addEventListener("change", (e) => {

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`, login)
        .then(res => res.json())
        .then(data => generateImage(data[0].url)
        );

}
);



card.addEventListener("click", (e) => {

    e.preventDefault();

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`, login)
        .then(res => res.json())
        .then(data => {
            if (img.src == generateImage(data[0].url)) {
                generateImage(data[0].url)
            }
        });

});

// buton1.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=5&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)
//             }
//         });

// })

// buton2.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=15&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })

// buton3.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=1&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })

// buton4.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=14&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })

// buton5.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=2&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })

// buton6.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=4&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })
// buton7.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?category_ids=7&limit=5", login)
//         .then(res => res.json())
//         .then(data => {
//             for (var i = 0; i < 6; i++) {
//                 generateImage1(data[i].url)

//             }
//         });

// })
// buton8.addEventListener('click', (e) => {
//     poz.innerHTML="";
//     fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif", login)
//         .then(res => res.json())
//         .then(data => {generateImage1(data[0].url)
//         });

// })

const butoane = [buton1, buton2, buton3, buton4, buton5, buton6, buton7, buton8];
const adrese = ["https://api.thecatapi.com/v1/images/search?category_ids=5&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=15&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=1&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=14&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=2&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=4&limit=5", "https://api.thecatapi.com/v1/images/search?category_ids=7&limit=5","https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5"];

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
}