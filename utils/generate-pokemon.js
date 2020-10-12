import pokemon from '../data/pokemon.js';
import pokeArray from '../data/pokemon.js';



export function generatePokemon(lastRound) {

    console.log('generatePokemon');

    let currentRound = [];
        let dupe = false;
        while (currentRound.length < 3){
            let temp = Math.floor(Math.random() * pokeArray.length);
                
                for (let currentPokemon of currentRound){
                    if (pokeArray[temp].id === currentPokemon.id){
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