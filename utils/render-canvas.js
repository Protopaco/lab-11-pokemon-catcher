import { getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import { renderChart } from './render-chart.js';


export function renderCanvas() {
    let chartData = renderChart();
    let labels = chartData[0];
    let data = chartData[1];
    let backgroundColor = chartData[2];
    let label = chartData[3];

    var ctx = document.getElementById('myChart').getContext('2d');

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
