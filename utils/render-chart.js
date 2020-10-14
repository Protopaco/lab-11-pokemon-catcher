import { getGameData, getLTData } from '../data/game-data.js'
import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';


export function renderChart(object, dataSet){

    return object.function(dataSet, object.key, object.value);
}

export function infoFromGameData(dataSet, key, passedLabel){    
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;
    // console.log(whichData);

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);

        labels.push(pokeData.pokemon);
        data.push(object[key]);
        backgroundColor.push(renderColor(pokeData.type_1))
    }

    return [labels, data, backgroundColor, label];
    }

export function infoFromPokeArray(dataSet, key, passedLabel){    
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;
    // console.log(whichData);

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);

        labels.push(pokeData.pokemon);
        data.push(pokeData[key]);
        backgroundColor.push(renderColor(pokeData.type_1))
    }
    return [labels, data, backgroundColor, label];
    
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