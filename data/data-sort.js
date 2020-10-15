
export function dataSort(passedKey, passedObjects){

    return passedObjects.sort(function(a,b) {return a[passedKey] - b[passedKey]});

}