import { getChartSelection, getChartVersionSelection, getGameData, getLTData } from '../data/game-data.js';
import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';
import { dataSort } from '../data/data-sort.js';


export function renderChart(){
    let passedObject = getChartSelection();
    let dataSet = getDataSet();
    if (passedObject.function === 'infoFromGameData'){
        return infoFromGameData(dataSet, passedObject);
    } else if (passedObject.function === 'typesCaptured'){
        return typesCaptured(dataSet, passedObject);
    } else if (passedObject.function === 'infoFromPokeArray'){
        return infoFromPokeArray(dataSet, passedObject);
    }
}

export function infoFromGameData(dataSet, passedObject){ 
    dataSet = dataSort(passedObject.key, dataSet, '>');
    // declaring variables
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedObject.value;
    // increments through passed dataSet (current or long-term)
    for (let dataObject of dataSet){
        // retrieves the pokemon referenced in dataSet
        let pokeData = getById(dataObject.id, pokeArray);
        if(dataObject[passedObject.key] > 0){
            labels.push(pokeData.pokemon);
            data.push(dataObject[passedObject.key]);
            backgroundColor.push(pokeData.color_1)
        }
    }
    return [labels, data, backgroundColor, label, passedObject.type, passedObject.titleText, passedObject.legend];
    }

export function infoFromPokeArray(dataSet, passedObject){    
    let unsortedArray = [];
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let label = passedObject.value;

    for (let dataObject of dataSet){
        let pokeData = getById(dataObject.id, pokeArray);
        let tempObject = {
            labels: pokeData.pokemon,
            data: pokeData[passedObject.key],
            color: pokeData.color_1,
        }
        unsortedArray.push(tempObject)
    }
    let sortedArray = dataSort('data', unsortedArray, '>');
    for (let sortedObject of sortedArray){
        labels.push(sortedObject['labels']);
        data.push(sortedObject['data']);
        backgroundColor.push(sortedObject['color']);
    }
    return [labels, data, backgroundColor, label, passedObject.type, passedObject.titleText, passedObject.legend];
    
}

export function typesCaptured(dataSet, passedObject){
    let labels = [];
    let typeJSON = {};
    let data = [];
    let backgroundColor = [];
    let label = passedObject.value;

    for (let dataObject of dataSet){
        let pokeData = getById(dataObject.id, pokeArray);
        if (!typeJSON[pokeData.type_1]){
            typeJSON[pokeData.type_1] = [dataObject[passedObject.key], pokeData.color_1];
        } else {
            typeJSON[pokeData.type_1][0] += dataObject[passedObject.key];
        }
    }

    let sortableArray = Object.keys(typeJSON).map(key => ({labels: key, data: typeJSON[key][0], color: typeJSON[key][1]}));
    sortableArray = dataSort('data', sortableArray, '>');
    for (let sortedObject of sortableArray){
        labels.push(sortedObject['labels']);
        data.push(sortedObject['data']);
        backgroundColor.push(sortedObject['color']);
    }
    return [labels, data, backgroundColor, label, passedObject.type, passedObject.titleText, passedObject.legend];
}

function getDataSet(){
    let version = getGameData();
    if(getChartVersionSelection() === 'getLTData'){
        version = getLTData();
    };
    return version;
}
