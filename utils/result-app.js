import { clearGameData, clearLTData, combineData, setChartSelection, setChartVersionSelection, setSortDirection } from '../data/game-data.js'
import { renderCanvas } from './render-canvas.js';
import { dataSort } from '../data/data-sort.js';
import dataOptions from '../data/data-view-options.js';
import tabArray from '../data/result-graph-data.js';
import { renderGameDataButtons } from './render-game-data-buttons.js';
import { renderTabs } from './render-tabs.js';
import { renderSortDirection } from './render-sort-direction.js';

const tabSection = document.getElementById('tab-section');
const resetButton = document.getElementById('clear-results');
const playButton = document.getElementById('play-again');

let tabs = renderTabs()
for (let tab of tabs){
    tabSection.append(tab);
}

renderGameDataButtons();
renderSortDirection('>');
setChartSelection(tabArray[0]);
setChartVersionSelection(dataOptions[0])
setSortDirection('>');
renderCanvas();


resetButton.addEventListener('click', function () {
    clearLTData();
    clearGameData();
    location.href="../";
})

playButton.addEventListener('click', function () {
    clearGameData();
    location.href="../";
})

// var ctx = document.getElementById('myChart').getContext('2d');
// new Chart(ctx, renderCanvas)