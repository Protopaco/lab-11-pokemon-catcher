import { generatePokemon } from './generate-pokemon.js';
import { renderPokemon } from './render-pokemon-cards.js';




export function displayPokemonCards(lastRound) {
    const displaySection = document.getElementById('card-section');
    console.log('display-pokemon-cards');

    displaySection.innerHTML = '';

    let currentRound = generatePokemon(lastRound);
    let currentCards = renderPokemon(currentRound);

    for (let card of currentCards){
        displaySection.appendChild(card);
    }
    return currentRound;
    
}