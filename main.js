/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/

// 1. creare un elenco di post tramite un'arrey con al suo interno degli oggetti => arrey di oggetti
// 2. ogni oggetto dovrà contenere diverse informazioni/proprietà
//   2.1 nome autore, foto profilo, data, testo del post, immagine, numero di likes
//   2.2 non tutti i post devono avere un'immagine
// 3. stampare i post creati nel dom tramite js => ciclo for
// 4. ad ogni click del tanto “Mi Piace” incrementare il numero di likes => addEventListener("click",

const containerPost = document.querySelector(".posts-list");

const posts = [

    {
        "nomeAutore" : "Orazio",
        "imgProfilo" : "https://i.picsum.photos/id/572/300/300.jpg?hmac=GmFM1BbR4Z_ProRT8-H-_VNimN1D_JkUnpC1Aq7gRA8",
        "data" : "4 mesi fa",
        "testo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "img" : "https://unsplash.it/600/300?image=171",
        "NumeroLikes" : 80
    },

    {
        "nomeAutore" : "Enrico",
        "imgProfilo" : "https://i.picsum.photos/id/139/300/300.jpg?hmac=pkjmbFZuiSwWrscQ38cTv3IEuJQbsAHlh0haDEIVme4",
        "data" : "5 mesi fa",
        "testo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "img" : "https://unsplash.it/600/300?image=171",
        "NumeroLikes" : 50
    },

    {
        "nomeAutore" : "Francesco",
        "imgProfilo" : "https://i.picsum.photos/id/802/300/300.jpg?hmac=JRQRMnK703BsaoqDMYGAZqT18Hu8V1VxS3zTWQrE3cw",
        "data" : "6 mesi fa",
        "testo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "img" : "https://unsplash.it/600/300?image=171",
        "NumeroLikes" : 30
    }
]

let post = "";

for (let i = 0; i < posts.length; i++){

    // let {nomeAutore, imgProfilo, data, testo, img, NumeroLikes} = posts[i];

    let name = posts[i].nomeAutore;
    let profilo = posts[i].imgProfilo;
    let date = posts[i].data;
    let text = posts[i].testo;
    let imgx = posts[i].img;
    let likes = posts[i].NumeroLikes;

    let post = document.createElement('div');
    post.classList.add('post');

    let imgElement = `<img src="${imgx}" alt="">`;

    if ( i == 1 ) {
        imgElement = '';
    }

    post.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilo}" alt="${name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${text}</div>
        <div class="post__image">
            ${imgElement}
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__la<img src="${imgx}" alt="">Mi Piace </span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    `;

    containerPost.append(post);
}
 let bottoni = document.querySelectorAll(".js-like-button");
 let numeroLikes = document.querySelectorAll(".js-likes-counter");

 for (let i = 0; i < bottoni.length; i++){
     

    bottoni[i].addEventListener("click",
        function() {
                bottoni[i].classList.add("clicked");
                let valore = parseInt(numeroLikes[i].innerHTML);
                console.log(valore);
                numeroLikes[i].innerHTML = ++valore;
        }
    )
 }
