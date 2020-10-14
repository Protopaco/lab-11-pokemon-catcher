import pokeArray from '../data/pokemon.js';
import { getById } from './get-by-id.js';

// generatePokemon() takes in the previous round's pokemon
// it then creates three new numbers, checking that
// a) there are no duplicates in current set
// b) no duplicates with previous set
// c) within the JSON of given pokemon

export function generatePokemon(lastRound) {

    let currentRound = [];
        while (currentRound.length < 3){
            let tempIndex = Math.floor(Math.random() * pokeArray.length);
            let tempPokemon = pokeArray[tempIndex];
                
                if(getById(tempPokemon.id, currentRound)===null && getById(tempPokemon.id, lastRound)===null){
                    currentRound.push(tempPokemon);
                }
    }
    return currentRound;
}

