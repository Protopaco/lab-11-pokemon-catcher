// import { infoFromGameData, infoFromPokeArray  } from '../utils/render-chart.js';

export default [
    {
        value: 'captured',
        key: 'captureCount',
        function: 'infoFromGameData',
        type: 'bar',
        checked: true,
    },
    {
        value: 'viewed',
        key: 'displayCount',
        function: 'infoFromGameData',
        type: 'bar',
        checked: false,
    },
    {
        value: 'types captured',
        key: "captureCount",
        function: 'typesCaptured',
        type: 'pie',
        checked: false,
    },
    {
        value: 'types viewed',
        key: "displayCount",
        function: 'typesCaptured',
        type: 'pie',
        checked: false,
    },
    {
        value: 'height',
        key: 'height',
        function: 'infoFromPokeArray',
        type: 'bar',
        checked: false,
    },
    {
        value: 'weight',
        key: 'weight',
        function: 'infoFromPokeArray',
        type: 'bar',
        checked: false,
    },
    {
        value: 'base experience',
        key: 'base_experience',
        function: 'infoFromPokeArray',
        type: 'bar',
        checked: false,
    },    
    {
        value: 'hit points',
        key: 'hp',
        function: 'infoFromPokeArray',
        type: 'bar',
        checked: false,
    },
    {
        value: 'speed',
        key: 'speed',
        function: 'infoFromPokeArray',
        type: 'bar',
        checked: false,
    }
]



