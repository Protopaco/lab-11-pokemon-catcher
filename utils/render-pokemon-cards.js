import { capturePokemon } from './play-page-utils.js';


// renderPokemon isn't as gastly as it sounds
// it iterates through the current generated pokemon
// and creates HTML elements for the user to choose from
// it then appends those elements into currentArray, and returns it


export function renderPokemon(currentRound){

    let currentArray = [];
    for (let pokemon of currentRound) {

        let label = document.createElement('label');
        let radioButton = document.createElement('input');
        let image = document.createElement('img');
        let nameTag = document.createElement('p');

        label.classList.add('p-card');


        radioButton.type = 'radio';
        
        image.src = pokemon.url_image;
        image.classList.add("poke-image");
        image.onclick = function () {
            capturePokemon(pokemon);
        }

        nameTag.textContent = pokemon.pokemon;

        label.appendChild(radioButton);
        label.appendChild(image);
        label.appendChild(nameTag);

        currentArray.push(label)
    }
    return currentArray;
}