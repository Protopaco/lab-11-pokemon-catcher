import { getGameData } from '../data/game-data.js'
import { getById } from './get-by-id.js';
import { renderTabs } from './render-tabs.js';
import { renderChart } from './render-chart.js';
import pokeArray from '../data/pokemon.js';

var ctx = document.getElementById('myChart').getContext('2d');
const tabSection = document.getElementById('tab-section');

let tabs = renderTabs()


for (let tab of tabs){
    tabSection.append(tab);
}

prepareChart('captureCount');

export function prepareChart(keyValue) {
    let chartData = renderChart(keyValue);
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

