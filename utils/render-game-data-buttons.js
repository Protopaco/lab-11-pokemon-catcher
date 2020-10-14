import { getGameData, getLTData, setChartVersionSelection } from "../data/game-data.js";
import { renderCanvas } from "./render-canvas.js";
import dataOptions from "../data/data-view-options.js";
import { renderCaptureList } from "./rendered-capture-list.js";


export function renderGameDataButtons(){
    let gameChoiceSection = document.getElementById('game-choice')
    setChartVersionSelection(getGameData());

    for (let dataOption of dataOptions){
        let label = document.createElement('label');
        let input = document.createElement('input');
        let span = document.createElement('span');

        input.type = 'radio';
        input.name = 'game';
        input.value = dataOption.value;
        if (dataOption.checked){
            input.checked = true;
        }

        span.classList.add('game-text');
        span.textContent = dataOption.textContent;
        span.onclick = function () {
            setChartVersionSelection(dataOption.function);
            renderCanvas();
        }

        label.appendChild(input);
        label.appendChild(span)
        gameChoiceSection.appendChild(label);
    }


}