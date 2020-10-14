import { getChartSelection, getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';
import { dataSort } from '../data/data-sort.js';


export function renderChart(){
    let object = getChartSelection();
    let dataSet = getDataSet();
    dataSet = dataSort('id' ,dataSet);
    if (object.function === 'infoFromGameData'){
        return infoFromGameData(dataSet, object.key, object.value);
    } else if (object.function === 'typesCaptured'){
        return typesCaptured(dataSet, object.value);
    } else if (object.function === 'infoFromPokeArray'){
        return infoFromPokeArray(dataSet, object.key, object.value);
    }
    // return object.function(dataSet, object.key, object.value);
}

export function infoFromGameData(dataSet, key, passedLabel){    
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;

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

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);

        labels.push(pokeData.pokemon);
        data.push(pokeData[key]);
        backgroundColor.push(renderColor(pokeData.type_1))
    }
    return [labels, data, backgroundColor, label];
    
}

export function typesCaptured(dataSet, passedLabel){
    let labels = [];
    let typeJSON = {};
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);
        if (!typeJSON[pokeData.type_1]){
            typeJSON[pokeData.type_1] = object.captureCount;
            backgroundColor.push(renderColor(pokeData.type_1))
        } else {
            typeJSON[pokeData.type_1] += object.captureCount;
        }
    }

    labels = Object.keys(typeJSON);
    data = Object.values(typeJSON);
    return [labels, data, backgroundColor, label];
}

function renderColor(pokeType){

    if (pokeType === 'grass'){
        return '#78C850';
    } else if (pokeType === 'fire'){
        return '#F08030';
    } else if (pokeType === 'water'){
        return '#6890F0';
    } else if (pokeType === 'normal'){
        return '#A8A878';
    } else if (pokeType === 'bug'){
        return '#A8B820';
    } else {
        return '#0091d9';
    }
}


function getDataSet(){
    let version = getGameData();
    if(getChartVersionSelection() === 'getLTData'){
        version = getLTData();
    };
    return version;
}
