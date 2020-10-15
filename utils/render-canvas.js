import { getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import { renderChart } from './render-chart.js';


export function renderCanvas() {
    let chartData = renderChart();
    let labels = chartData[0];
    let data = chartData[1];
    let backgroundColor = chartData[2];
    let label = chartData[3];
    let type = chartData[4];
    let titleText = chartData[5];
    let legend = chartData[6];

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
                borderWidth: .5
            }]
        },
        options: {
            legend: { display: legend},
            title: {
                display: true,
                fontSize: 24,
                text: titleText,
            },
            events: [],
            styling:{
                gridLines:{
                    display: false,
                }
            },
            tooltips: {enabled: false},
            hover: {mode: null},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });

}

