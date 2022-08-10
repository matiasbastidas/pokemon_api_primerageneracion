const pokemonlista = document.getElementById('pokemonlista')

const fetchPokemones = () => {
    const promesas = []
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promesas.push(fetch(url).then((res) => res.json()))
    }
    Promise.all(promesas).then((resultados) => {
        const pokemones = resultados.map((resultado) => ({
            nombre: resultado.name,
            imagen: resultado.sprites['front_default'],
            id: resultado.id
        }))
        mostrarPokemones(pokemones)
    })
}

const mostrarPokemones = (pokemones) => {
    const pokemonHTML = pokemones
        .map(
            (pokemon) => `
        <li class="tarjeta">
            <img class="tarjeta-imagen" src="${pokemon.imagen}"/>
            <h2 class="tarjeta-titulo">${pokemon.id}. ${pokemon.nombre}</h2>
        </li>
    `
        ).join('')
    pokemonlista.innerHTML = pokemonHTML
};

fetchPokemones()