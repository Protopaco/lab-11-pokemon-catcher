import { displayPokemonCards } from './display-pokemon-cards.js';
import { processRound } from './process-round.js';
import { renderCaptureList } from './rendered-capture-list.js';

const capturedPokemon = document.getElementById('captured-section');

let roundCount = 0;
let currentRound = displayPokemonCards([]);
let roundData = currentRound;

capturedPokemon.innerHTML = '';

// capturePokemon is the main driver of the app
// when user chooses a pokemon, roundCount itterates
// processRound() is called to record results
// chosen pokemon is added to the captured list
// the roundData is collected
// after 10 rounds of play, user is sent to results page
export function capturePokemon(chosenPokemon){
    roundCount++;
    processRound(chosenPokemon, currentRound);

    let newCaptured = renderCaptureList(chosenPokemon, roundCount);
    capturedPokemon.appendChild(newCaptured);

    roundData.push(currentRound);
    if (roundCount < 10){
        currentRound = displayPokemonCards(currentRound);
    } else {
        location.href = './results/';
    }
}

