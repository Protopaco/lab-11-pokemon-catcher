import { getGameData, sendGameData } from '../data/game-data.js';
import { getById } from './get-by-id.js';

// increments displayCounter after cards are generated
export function processDisplayRound(currentRound){
    let gameData = getGameData();

    for (let currentPokemon of currentRound){
        let pokemonObject = getById(currentPokemon.id, gameData);

        if (pokemonObject){
            pokemonObject.displayCount++;
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

// increments captureCounter after pokemon is selected
export function processCaptured(capturedPokemon){
    let gameData = getGameData();
    let pokemonObject = getById(capturedPokemon.id, gameData);

    pokemonObject.captureCount++;
    sendGameData(gameData);
}

