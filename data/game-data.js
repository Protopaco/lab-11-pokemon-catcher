import { getById } from "../utils/get-by-id.js";

let gameKey = 'gameData';
let longTerm = 'longTermGD';
let dataVersion = 'dataVersion';
let chartSelection = 'chartSelection';
let sortDirection = 'sortDirection';


export function getGameData(){
    let temp = JSON.parse((localStorage.getItem(gameKey)));
    
    return ( temp ? temp : []);
}

export function sendGameData(newGameData){
    localStorage.setItem(gameKey, JSON.stringify(newGameData));
}

export function clearGameData(){
    localStorage.removeItem(gameKey);
}

export function getLTData(){
    let temp = JSON.parse((localStorage.getItem(longTerm)));
    return ( temp ? temp : []);
}

export function sendLTData(newGameData){
    localStorage.setItem(longTerm, JSON.stringify(newGameData));
}

export function clearLTData(){
    localStorage.removeItem(longTerm);
}

export function combineData(){
    let currentData = getGameData();
    let longTermData = getLTData();

    for (let current of currentData) {
        let LTObject = getById(current.id, longTermData);
        if (LTObject){
            LTObject.displayCount += current.displayCount;
            LTObject.captureCount += current.captureCount;
        } else {
            longTermData.push({
                id: current.id,
                displayCount: current.displayCount,
                captureCount: current.captureCount,
            })
        }

    }
    sendLTData(longTermData);
}

export function setChartVersionSelection(versionKey){
    localStorage.setItem(dataVersion, JSON.stringify(versionKey));
}

export function getChartVersionSelection(){
    return JSON.parse(localStorage.getItem(dataVersion));
}

export function setChartSelection(chartObject){
    localStorage.setItem(chartSelection, JSON.stringify(chartObject));
}

export function getChartSelection(){
    return JSON.parse(localStorage.getItem(chartSelection));
}

export function setSortDirection(directionChoice){
    localStorage.setItem(sortDirection, JSON.stringify(directionChoice));
}

export function getSortDirection(){
    return JSON.parse(localStorage.getItem(sortDirection));
}