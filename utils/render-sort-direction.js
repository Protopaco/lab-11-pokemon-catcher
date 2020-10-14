import { setSortDirection } from "../data/game-data.js";
import { renderCanvas } from "./render-canvas.js";


export function renderSortDirection() {
    let sortChoiceSection = document.getElementById('sort-direction');
    let options = ['>', '<'];

    for (let option of options){
        let label = document.createElement('label');
        let input = document.createElement('input');
        let span = document.createElement('span');

        input.type = 'radio';
        input.name = 'sort';
        input.value = option;
        // if (dataOption.checked){
        //     input.checked = true;
        // }

        span.classList.add('game-text');
        span.textContent = option;
        span.onclick = function () {
            setSortDirection(option)
            renderCanvas();
        }

        label.appendChild(input);
        label.appendChild(span)
        sortChoiceSection.appendChild(label);
        console.log(sortChoiceSection);
    }
}