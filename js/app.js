const container = document.querySelector(".container")
const cards = [
  { name: "Obelisk", image: "images/obelisk.jpg", own: 1 },
  { name: "Slifer", image: "images/slifer.jpg", own: 0 },
  { name: "Ra", image: "images/ra.jpg", own: 0 },
]

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

const showCards = () => {
    let output = ""
    cards.forEach(function({name, image, own}){
        not_in_collection = null
        if( 0 == own ){
            not_in_collection = 'card--not-in-collection'
        }

        output += `
                <div class="card">
                  <img alt=${name} class="card--avatar ${not_in_collection}" src=${image} />
                  <h1 class="card--title">${name}</h1>
                </div>
                `
    })
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCards)