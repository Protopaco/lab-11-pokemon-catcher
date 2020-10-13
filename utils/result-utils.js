import { getGameData, getLTData, combineData, clearLTData } from '../data/game-data.js';
import { renderResults } from './render-results.js';

const currentTerm = document.getElementById('current-term');
const longTerm = document.getElementById('long-term');
const playAgain = document.getElementById('play-again');
const clearResults = document.getElementById('clear-results');



let currentResults = getGameData();
combineData();
let longTermResults = getLTData();


let currentResultArray = renderResults(currentResults);
let longTermResultArray = renderResults(longTermResults);

for (let currentResult of currentResultArray){
    currentTerm.appendChild(currentResult);
}

for (let longTermResult of longTermResultArray){
    longTerm.appendChild(longTermResult);
}

playAgain.addEventListener('click', function () {
    location.href="../";
}
)

clearResults.addEventListener('click', function () {
    clearLTData();
    location.href="../";

})
