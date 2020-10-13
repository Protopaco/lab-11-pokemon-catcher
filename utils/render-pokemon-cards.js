import { capturePokemon } from './play-page-utils.js';

export function renderPokemon(currentRound){
    console.log('renderPokemon');


    // console.log(currentRound);
    let currentArray = [];
    for (let pokemon of currentRound) {

        let label = document.createElement('label');
        let radioButton = document.createElement('input');
        let image = document.createElement('img');
        let nameTag = document.createElement('p');

        label.classList.add('p-card');
        image.onclick = function () {
            capturePokemon(pokemon);
        }

        radioButton.type = 'radio';
        
        image.src = pokemon.url_image;
        image.classList.add("poke-image");

        nameTag.textContent = pokemon.pokemon;

        label.appendChild(radioButton);
        label.appendChild(image);
        label.appendChild(nameTag);

        currentArray.push(label)
    }
    return currentArray;
}