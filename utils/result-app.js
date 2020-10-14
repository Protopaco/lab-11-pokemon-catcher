import { clearGameData, clearLTData, combineData } from '../data/game-data.js'
import { getById } from './get-by-id.js';
import { renderTabs } from './render-tabs.js';
import { renderCaptured, renderChart } from './render-chart.js';
import pokeArray from '../data/pokemon.js';

var ctx = document.getElementById('myChart').getContext('2d');
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
//prepareChart(renderCaptured);

export function prepareChart(object) {
    let chartData = renderChart(object);
    let labels = chartData[0];
    let data = chartData[1];
    let backgroundColor = chartData[2];
    let label = chartData[3];

    // let chart = document.createElement('chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: backgroundColor,
                borderColor: [],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

