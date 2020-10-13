import pokemon from '../data/pokemon.js';
import pokeArray from '../data/pokemon.js';


// generatePokemon() takes in the previous round's pokemon
// it then creates three new numbers, checking that
// a) there are no duplicates in current set
// b) no duplicates with previous set
// c) within the JSON of given pokemon

export function generatePokemon(lastRound) {

    let currentRound = [];
        let dupe = false;
        while (currentRound.length < 3){
            let temp = Math.floor(Math.random() * pokeArray.length);
                
                for (let currentPokemon of currentRound){
                    if (pokeArray[temp].id === currentPokemon.id && dupe === false){
                        dupe = true;
                    }
                }
                for (let lastPokemon of lastRound){
                    if (pokeArray[temp].id === lastPokemon.id){
                        dupe = true;
                    }
                }
                if (!dupe) {
                    currentRound.push(pokeArray[temp]);
                }
            dupe = false;
    }
    return currentRound;
}