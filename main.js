let listaPokemon = document.querySelector('#listaPokemon')
let containerDettagli = document.querySelector('#containerDettagli')


fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response=> response.json())
.then (data => {
    // console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        let elLista = document.createElement('li')
        elLista.innerHTML = `
        <a href="">${data.results[i].name}</a>
        `
        listaPokemon.appendChild(elLista)
    }
})

let cerca = document.querySelector('#cerca')
let submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${cerca.value}`)
    .then(response=> response.json())
    .then (data => {
        // console.log(data);
        containerDettagli.innerHTML = ""
        let img = document.createElement('div')
        img.classList.add('col-12', 'col-md-6', 'd-flex', 'align-items-center')
        let dettagli = document.createElement('div')
        dettagli.classList.add('col-12', 'col-md-6', 'd-flex', 'flex-column')
        img.innerHTML = `
            <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <img class="imgPokemon" src="${data.sprites.front_default}" alt="">
            </div>
        `
        dettagli.innerHTML = `
            <h1 style="text-align: center; margin-bottom: 50px;">${data.name}</h1>
            <p>altezza : ${data.height}</p>
            <p>peso : ${data.weight}</p>
            <p>abilità : ${data.abilities[0].ability.name}</p>
            <p>tipo : ${data.types[0].type.name}</p>
        `
        containerDettagli.appendChild(img)
        containerDettagli.appendChild(dettagli)
        cerca.value = ""
    })
    
})

