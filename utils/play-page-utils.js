import { getGameData } from '../data/game-data.js';
import { displayPokemonCards } from './display-pokemon-cards.js';
import { processRound } from './process-round.js';
import { renderCaptureList } from './rendered-capture-list.js';

const capturedPokemon = document.getElementById('captured-section');

let roundCount = 0;
let currentRound = displayPokemonCards([]);
let roundData = currentRound;

capturedPokemon.innerHTML = '';


export function capturePokemon(chosenPokemon){
    roundCount++;
    processRound(chosenPokemon, currentRound);

    let newCaptured = renderCaptureList(chosenPokemon, roundCount);
    capturedPokemon.appendChild(newCaptured);
    testRounds(currentRound);
    roundData.push(currentRound);
    if (roundCount < 10){
        currentRound = displayPokemonCards(currentRound);
    } else {
        console.log(roundData);
        //location.href = './results/';
    }
}

