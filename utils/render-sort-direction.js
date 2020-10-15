import { setSortDirection } from "../data/game-data.js";
import { renderCanvas } from "./render-canvas.js";


export function renderSortDirection() {
    let sortChoiceSection = document.getElementById('sort-direction');
    let options = [['>', true], ['<', false]];

    for (let option of options){
        let label = document.createElement('label');
        let input = document.createElement('input');
        let span = document.createElement('span');

        input.type = 'radio';
        input.name = 'sort';
        input.value = option[0];
        input.checked = option[1];
        

        span.classList.add('game-text');
        span.textContent = option[0];
        span.onclick = function () {
            setSortDirection(option[0])
            renderCanvas();
        }

        label.appendChild(input);
        label.appendChild(span)
        sortChoiceSection.appendChild(label);
    }
}