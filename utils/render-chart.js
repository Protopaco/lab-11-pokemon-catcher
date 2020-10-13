import { getGameData } from '../data/game-data.js'
import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';


export function renderChart(keyValue){
    if (keyValue === 'captureCount'){
        return renderCaptured();
    }




}



export function renderCaptured(){
    let gameData = getGameData();
    let labels = [];
    let data = [];
    let backgroundColor = [];

    for (let object of gameData){
        let pokeData = getById(object.id, pokeArray);

        labels.push(pokeData.pokemon);
        data.push(object.captureCount);
        backgroundColor.push(renderColor(pokeData.type_1))
    }
    
    return [labels, data, backgroundColor];
    
}


function renderColor(pokeType){

    if (pokeType === 'grass'){
        return '#28d900';
    } else if (pokeType === 'fire'){
        return '#d90000';
    } else if (pokeType === 'water'){
        return '#00ced9';
    } else if (pokeType === 'normal'){
        return '#d99400';
    } else if (pokeType === 'bug'){
        return '#6500d9';
    } else {
        return '#0091d9';
    }
}