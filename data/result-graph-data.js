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
        value: 'height',
        key: 'height',
        function: 'infoFromPokeArray',
        checked: false,
    },
]



