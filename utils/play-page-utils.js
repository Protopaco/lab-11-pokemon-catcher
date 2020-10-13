import { displayPokemonCards } from './display-pokemon-cards.js';
import { processRound } from './process-round.js';


// const imageArray = document.querySelectorAll(".poke-image");

console.log('playPageUtils');
let roundCount = 0;
let currentRound = displayPokemonCards([]);
let roundData = currentRound;


export function capturePokemon(pokemon){
    roundCount++;
    processRound(pokemon, currentRound);
    roundData.push(currentRound);
    if (roundCount < 10){
        currentRound = displayPokemonCards(currentRound);
    } else {
        location.href = './results/';
    }
}
