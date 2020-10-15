// import { infoFromGameData, infoFromPokeArray  } from '../utils/render-chart.js';

export default [
    {
        value: 'captured',
        key: 'captureCount',
        function: 'infoFromGameData',
        type: 'bar',
        titleText: 'your captured pokemon',
        legend: false,
        checked: true,
    },
    {
        value: 'viewed',
        key: 'displayCount',
        function: 'infoFromGameData',
        type: 'bar',
        titleText: 'all the pokemon you saw',
        legend: false,
        checked: false,
    },
    {
        value: 'types captured',
        key: "captureCount",
        function: 'typesCaptured',
        titleText: 'types of pokemon you captured',
        type: 'pie',
        legend: true,
        checked: false,
    },
    {
        value: 'types viewed',
        key: "displayCount",
        function: 'typesCaptured',
        titleText: 'types of pokemon you saw',
        type: 'pie',
        legend: true,
        checked: false,
    },
    {
        value: 'height',
        key: 'height',
        function: 'infoFromPokeArray',
        type: 'horizontalBar',
        titleText: 'your pokemon by height',
        legend: false,
        checked: false,
    },
    {
        value: 'weight',
        key: 'weight',
        function: 'infoFromPokeArray',
        type: 'horizontalBar',
        titleText: 'your pokemon by weight',
        legend: false,
        checked: false,
    },
    {
        value: 'base experience',
        key: 'base_experience',
        function: 'infoFromPokeArray',
        type: 'horizontalBar',
        titleText: 'your pokemon by base experience',
        legend: false,
        checked: false,
    },    
    {
        value: 'hit points',
        key: 'hp',
        function: 'infoFromPokeArray',
        type: 'horizontalBar',
        titleText: 'your pokemon by hit points',
        legend: false,
        checked: false,
    },
    {
        value: 'speed',
        key: 'speed',
        function: 'infoFromPokeArray',
        titleText: 'your pokemon by speed',
        type: 'horizontalBar',
        legend: false,
        checked: false,
    }
]



