//DATA ATTRIBUTE 
function displayType(pokemon) {
    var pokemonType = pokemon.getAttribute("data-pokemon-type");
    alert("This is a " + pokemonType + " Pokemon!");
}