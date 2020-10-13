
let gameData = [];


export function getGameData(){
    return gameData;
}

export function sendGameData(newGameData){
    gameData = newGameData;
}