import { combineData } from '../data/game-data.js';
import { displayPokemonCards } from './display-pokemon-cards.js';
import { processCaptured } from './process-round.js';
import { renderCaptureList } from './rendered-capture-list.js';

const capturedPokemon = document.getElementById('captured-section');
const cardSection = document.getElementById('card-section');
const resultsButton = document.getElementById('results');

let roundCount = 0;
let currentRound = displayPokemonCards([]);
let roundData = currentRound;

capturedPokemon.innerHTML = '';

resultsButton.addEventListener('click', function () {
    location.href = './results/';
    combineData();

})

// capturePokemon is the main driver of the app
// when user chooses a pokemon, roundCount itterates
// processRound() is called to record results
// chosen pokemon is added to the captured list
// the roundData is collected
// after 10 rounds of play, user is sent to results page
export function capturePokemon(chosenPokemon){
    roundCount++;
    processCaptured(chosenPokemon);

    let newCaptured = renderCaptureList(chosenPokemon, roundCount);
    capturedPokemon.appendChild(newCaptured);

    roundData.push(currentRound);
    if (roundCount < 10){
        currentRound = displayPokemonCards(currentRound);
    } else {
        let giphy = document.createElement('img');
        giphy.id = 'giphy';
        giphy.src = '../assets/giphy.gif';
        cardSection.innerHTML = '';
        cardSection.appendChild(giphy);
        resultsButton.style.visibility = 'visible';
    }

}

