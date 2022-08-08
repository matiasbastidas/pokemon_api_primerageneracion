const pokeContainer = document.createElement("div")
document.body.append(pokeContainer)

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then(renderPokemon)
    .catch(console.error)

function renderPokemon(pokeObject) {
    console.log(typeof pokeObject)
    const arrayPoke = pokeObject.results
    console.log(arrayPoke)
    let i = 1
    Object.keys(arrayPoke).forEach((key) => {
        const poke = arrayPoke[key].name
        pokedex(`${i++}. ${poke}`)
    })
}

function pokedex(pokeName) {
    const pokeHeader = document.createElement("h2")
    pokeHeader.textContent = `${pokeName}`
    pokeHeader.className = "center"
    pokeContainer.append(pokeHeader)
}