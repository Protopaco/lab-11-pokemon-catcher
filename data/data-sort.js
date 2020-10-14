
export function dataSort(passedKey, passedObjects, direction){
    console.log(passedObjects)
    if (direction === '>'){
        return passedObjects.sort(function(b,a) {return a[passedKey] - b[passedKey]});
    } else {
        return passedObjects.sort(function(a,b) {return b[passedKey] - a[passedKey]});
    }

}