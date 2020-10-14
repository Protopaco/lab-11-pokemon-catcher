import { getSortDirection } from './game-data.js';

export function dataSort(passedKey, passedObjects, direction){
   
    // console.log(getSortDirection());
    if (getSortDirection() === '>'){

        // console.log('here')
        return passedObjects.sort(function(b,a) {return a[passedKey] - b[passedKey]});
    } else {

        // console.log(passedObjects.sort(function(a,b) {return b[passedKey] - a[passedKey]}));
        return passedObjects.sort(function(a,b) {return a[passedKey] - b[passedKey]});
    }

}