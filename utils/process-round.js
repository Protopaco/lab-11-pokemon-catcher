import { getGameData, sendGameData } from '../data/game-data.js';
import { getById } from './get-by-id.js';

// processRound takes capturedPokemon and currentRound data 
// retrieves the current gameData, then
// a) checks if current pokemon are recoreded in gameData
// b) if so, it iterates the counts
// c) if not, it creates a new entry in the gameData
// d) send gameData back into localStorage
export function processRound(capturedPokemon, currentRound){
    let gameData = getGameData();
    console.log('-----');
    for (let currentPokemon of currentRound){

        let index = getById(currentPokemon.id, gameData);
        console.log(index);
        if (index!==null){
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
    console.log(gameData);
    sendGameData(gameData);
}

