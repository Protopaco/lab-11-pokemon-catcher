import { capturePokemon } from './play-page-utils.js';
import { getGameData } from '../data/game-data.js';
import { getById } from './get-by-id.js';


// renderPokemon isn't as gastly as it sounds
// it iterates through the current generated pokemon
// and creates HTML elements for the user to choose from
// it then appends those elements into currentArray, and returns it

export function renderPokemon(currentRound){

    let currentArray = [];
    for (let pokemon of currentRound) {

        let label = document.createElement('label');
        let radioButton = document.createElement('input');
        let image = document.createElement('img');
        let nameTag = document.createElement('p');
        let stats = pokeStats(pokemon);

        label.classList.add('p-card');

        radioButton.type = 'radio';
        
        image.src = pokemon.url_image;
        image.classList.add("poke-image");
        image.onclick = function () {
            capturePokemon(pokemon);
        }

        nameTag.textContent = pokemon.pokemon;

        label.appendChild(radioButton);
        label.appendChild(image);
        label.appendChild(nameTag);
        label.appendChild(stats);

        currentArray.push(label)
    }
    return currentArray;
}

function pokeStats(pokemon){
    let gameData = getGameData();
    let captures = 0;
    let views = 0;
    let pokemonData = getById(pokemon.id, gameData);
    
    if (pokemonData) {
        views = pokemonData.displayCount;
        captures = pokemonData.captureCount;
    }

    let stats = document.createElement('p');

    stats.classList.add("stats");
    stats.textContent = "views: " +views +" captures: " +captures;

    return stats;
}