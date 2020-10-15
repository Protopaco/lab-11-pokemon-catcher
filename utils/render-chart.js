import { getChartSelection, getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';
import { dataSort } from '../data/data-sort.js';


export function renderChart(){
    let object = getChartSelection();
    console.log(object.type);
    let dataSet = getDataSet();
    if (object.function === 'infoFromGameData'){
        return infoFromGameData(dataSet, object.key, object.value, object.type);
    } else if (object.function === 'typesCaptured'){
        return typesCaptured(dataSet, object.key, object.value, object.type);
    } else if (object.function === 'infoFromPokeArray'){
        return infoFromPokeArray(dataSet, object.key, object.value, object.type);
    }
}

export function infoFromGameData(dataSet, passedKey, passedLabel, passedType){ 
    dataSet = dataSort(passedKey, dataSet, '>');
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);
        if(object[passedKey] > 0){
            labels.push(pokeData.pokemon);
            data.push(object[passedKey]);
            backgroundColor.push(renderColor(pokeData.type_1))
        }
    }
    return [labels, data, backgroundColor, label, passedType];
    }

export function infoFromPokeArray(dataSet, passedKey, passedLabel, passedType){    
    let unsortedArray = [];
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);
        let tempObject = {
            labels: pokeData.pokemon,
            data: pokeData[passedKey],
            color: renderColor(pokeData.type_1)
        }
        unsortedArray.push(tempObject)
    }
    let sortedArray = dataSort('data', unsortedArray, '>');
    for (let sortedObject of sortedArray){
        labels.push(sortedObject['labels']);
        data.push(sortedObject['data']);
        backgroundColor.push(sortedObject['color']);
    }
    return [labels, data, backgroundColor, label, passedType];
    
}

export function typesCaptured(dataSet, passedKey, passedLabel, passedType){

    let labels = [];
    let typeJSON = {};
    let data = [];
    let backgroundColor = [];
    let label = passedLabel;

    for (let object of dataSet){
        let pokeData = getById(object.id, pokeArray);
        if (!typeJSON[pokeData.type_1]){
            typeJSON[pokeData.type_1] = [object[passedKey], renderColor(pokeData.type_1)];
        } else {
            typeJSON[pokeData.type_1][0] += object[passedKey];
        }
    }

    let sortableArray = Object.keys(typeJSON).map(key => ({labels: key, data: typeJSON[key][0], color: typeJSON[key][1]}));
    sortableArray = dataSort('data', sortableArray, '>');
    for (let sortedObject of sortableArray){
        labels.push(sortedObject['labels']);
        data.push(sortedObject['data']);
        backgroundColor.push(sortedObject['color']);
    }
    return [labels, data, backgroundColor, label, passedType];
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
