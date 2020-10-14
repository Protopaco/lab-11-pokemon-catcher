import { renderCaptured, renderDisplayed, renderHeight } from '../utils/render-chart.js';

export default [
    {
        value: 'captured',
        function: renderCaptured,
        checked: true,
    },
    {
        value: 'viewed',
        function: renderDisplayed,
        checked: false,
    },
    {
        value: 'height',
        function: renderHeight,
        checked: false,
    },
]



