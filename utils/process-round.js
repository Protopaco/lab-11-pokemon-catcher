import { getGameData, sendGameData } from '../data/game-data.js';
import { getById } from './get-by-id.js';


export function processDisplayRound(currentRound){
    let gameData = getGameData();

    for (let currentPokemon of currentRound){
        let index = getById(currentPokemon.id, gameData);

        if (index!==null){
            gameData[index].displayCount++;
        } else {
            gameData.push({
                id: currentPokemon.id,
                displayCount: 1,
                captureCount: 0,
            });
        }
    }
    sendGameData(gameData);
}


export function processCaptured(capturedPokemon){
    let gameData = getGameData();

    let index = getById(capturedPokemon.id, gameData)
    gameData[index].captureCount++;
    sendGameData(gameData);
}

