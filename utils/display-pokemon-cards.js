import { generatePokemon } from './generate-pokemon.js';

const displaySection = document.getElementById('card-section');


export function displayPokemonCards(roundData) {

    displaySection.innerHTML = '';
    let lastRound = [];
    if (roundData.length > 0) {
        lastRound = roundData[roundData.length - 1];
    }

    let currentRound = generatePokemon(lastRound);

    
}