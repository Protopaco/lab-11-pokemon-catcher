// import { infoFromGameData, infoFromPokeArray  } from '../utils/render-chart.js';

export default [
    {
        value: 'captured',
        key: 'captureCount',
        function: 'infoFromGameData',
        checked: true,
    },
    {
        value: 'viewed',
        key: 'displayCount',
        function: 'infoFromGameData',
        checked: false,
    },
    {
        value: 'types captured',
        key: "captureCount",
        function: 'typesCaptured',
        checked: false,
    },
    {
        value: 'types viewed',
        key: "displayCount",
        function: 'typesCaptured',
        checked: false,
    },
    {
        value: 'height',
        key: 'height',
        function: 'infoFromPokeArray',
        checked: false,
    },
    {
        value: 'weight',
        key: 'weight',
        function: 'infoFromPokeArray',
        checked: false,
    },
    {
        value: 'base experience',
        key: 'base_experience',
        function: 'infoFromPokeArray',
        checked: false,
    },    
    {
        value: 'hit points',
        key: 'hp',
        function: 'infoFromPokeArray',
        checked: false,
    },
    {
        value: 'speed',
        key: 'speed',
        function: 'infoFromPokeArray',
        checked: false,
    }
]



