
export function getById(id, array){
    for (let item of array){
        if (item.id === id){return array.indexOf(item)}
    }
    return null;

}