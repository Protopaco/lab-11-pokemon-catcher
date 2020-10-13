import { getGameData } from '../data/game-data.js'
import { getById } from './get-by-id.js';
import { renderTabs } from './render-tabs.js';
import { renderChart } from './render-chart.js';
import pokeArray from '../data/pokemon.js';

var ctx = document.getElementById('myChart').getContext('2d');
const tabSection = document.getElementById('tab-section');

let labels = [];
let data = [];

let tabs = renderTabs()


for (let tab of tabs){
    tabSection.append(tab);
}

export function prepareChart(keyValue) {
    let chartData = renderChart(keyValue);
    labels = chartData[0];
    data = chartData[1];
    let backgroundColor = chartData[2];
    console.log(backgroundColor);
    // let chart = document.createElement('chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
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

