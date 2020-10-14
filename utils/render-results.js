import pokeArray from '../data/pokemon.js';
import { getById } from '../utils/get-by-id.js';


export function renderResults(resultsArray){
    let returnArray = [];

    for (let results of resultsArray){
        let resultObject = getById(results.id, pokeArray);

        if (resultObject) {
            let name = resultObject.pokemon;
            let views = results.displayCount;
            let captures = results.captureCount;
            let img_src = resultObject.url_image;

            let div = document.createElement('div');
            let img = document.createElement('img');
            let nameTag = document.createElement('p');
            let viewTag = document.createElement('p');
            let captureTag = document.createElement('p');

            div.classList.add('card');

            img.classList.add('thumbnail');
            img.src = img_src;

            nameTag.textContent = name;
            nameTag.classList.add('text')
            
            viewTag.textContent = 'views: ' +views;
            viewTag.classList.add('text')

            captureTag.textContent = 'captures: ' +captures;
            captureTag.classList.add('text')

            div.appendChild(img);
            div.appendChild(nameTag);
            div.appendChild(viewTag);
            div.appendChild(captureTag);
            returnArray.push(div);
        }


    }
    return returnArray;
}