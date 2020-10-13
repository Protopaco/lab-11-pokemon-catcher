import { getGameData, sendGameData } from '../data/game-data.js';

export function processRound(capturedPokemon, currentRound){
    let gameData = getGameData();
    for (let currentPokemon of currentRound){
        let index = findByID(currentPokemon.id, gameData);
        if (index > 0){
            gameData[index].displayCount++;
            if (gameData[index].id === capturedPokemon.id){
                gameData[index].captureCount++;
            }

        } else {
            let captured = 0
            if (currentPokemon.id === capturedPokemon.id){
                captured = 1;
            }
            gameData.push({
                id: currentPokemon.id,
                displayCount: 1,
                captureCount: captured,
            })
        }
    }
    sendGameData(gameData);
}


function findByID(id, array){
    for (let item of array){
        if (item.id === id){return array.indexOf(item)}
    }
    return -1;


}