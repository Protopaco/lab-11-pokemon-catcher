import { clearGameData, clearLTData, combineData } from '../data/game-data.js'
import { renderCanvas } from './render-canvas.js';
import { getById } from './get-by-id.js';
import { renderTabs } from './render-tabs.js';
import pokeArray from '../data/pokemon.js';

const tabSection = document.getElementById('tab-section');
const resetButton = document.getElementById('clear-results');
const playButton = document.getElementById('play-again');

let tabs = renderTabs()
for (let tab of tabs){
    tabSection.append(tab);
}


resetButton.addEventListener('click', function () {
    clearLTData();
    clearGameData();
    location.href="../";
})

playButton.addEventListener('click', function () {
    combineData();
    location.href="../";
})

// var ctx = document.getElementById('myChart').getContext('2d');
// new Chart(ctx, renderCanvas)