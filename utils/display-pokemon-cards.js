import { generatePokemon } from './generate-pokemon.js';
import { renderPokemon } from './render-pokemon-cards.js';

// DisplayPokemonCards takes in the previous round's data
// calles 'generatePokemon()' then renders the cards from
// the generated pokemon, it then clears the previous display
// and updates them with the new set of cards

export function displayPokemonCards(lastRound) {
    const displaySection = document.getElementById('card-section');

    let currentRound = generatePokemon(lastRound);
    let currentCards = renderPokemon(currentRound);

    displaySection.innerHTML = '';

    for (let card of currentCards){
        displaySection.appendChild(card);
    }
    return currentRound;
    
}