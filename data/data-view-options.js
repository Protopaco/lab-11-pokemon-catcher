import { getGameData, getLTData } from "./game-data.js";

export default [
    {
        value: 'current', 
        textContent: 'last game',
        checked: true,
        function: 'getGameData'
    },
    {
        value: 'long-term',
        textContent: 'all time',
        checked: false,
        function: 'getLTData'
    }];