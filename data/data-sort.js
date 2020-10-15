import { getSortDirection } from './game-data.js';

export function dataSort(passedKey, passedObjects, direction){
   
    if (getSortDirection() === '>'){

        return passedObjects.sort(function(b,a) {return a[passedKey] - b[passedKey]});
    } else {
        return passedObjects.sort(function(a,b) {return a[passedKey] - b[passedKey]});
    }

}