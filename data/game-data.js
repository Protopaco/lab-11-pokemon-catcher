import { getById } from "../utils/get-by-id.js";

let gameKey = 'gameData';
let longTerm = 'longTermGD';


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
        let index = getById(current.id, longTermData);
        if (index!==null){
            longTermData[index].displayCount += current.displayCount;
            longTermData[index].captureCount += current.captureCount;
        } else {
            longTermData.push({
                id: current.id,
                displayCount: current.displayCount,
                captureCount: current.captureCount,
            })
        }

    }
    clearGameData();
    sendLTData(longTermData);
}
