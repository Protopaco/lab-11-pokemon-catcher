import { renderCanvas } from './render-canvas.js';
import tabArray from '../data/result-graph-data.js';
import { setChartSelection } from '../data/game-data.js';


export function renderTabs(){
    let returnArray = [];

    for (let tab of tabArray){
    let label = document.createElement('label');
    let radio = document.createElement('input');
    let span = document.createElement('span');

    label.classList.add('result-tab');

    radio.type = 'radio';
    radio.name = 'graph-chooser';
    radio.value = tab.value;
    radio.onclick = function () {
        setChartSelection(tab);
        renderCanvas();
    }
    
    if (tab.checked) {
        radio.checked = true;
    }

    span.classList.add('tab-text');
    span.textContent = tab.value;

    label.appendChild(radio);
    label.appendChild(span);

    returnArray.push(label);

    }
    return returnArray;
}