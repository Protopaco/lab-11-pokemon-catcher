import { getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import { renderChart } from './render-chart.js';


export function renderCanvas() {
    let chartData = renderChart();
    let labels = chartData[0];
    let data = chartData[1];
    let backgroundColor = chartData[2];
    let label = chartData[3];
    let type = chartData[4];

    var ctx = document.getElementById('myChart').getContext('2d');

    // let chart = document.createElement('chart');
    new Chart(ctx, {
        type: type,
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
            events: [],
            tooltips: {enabled: false},
            hover: {mode: null},
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

