
export function getById(id, array){
    for (let item of array){
        if (item.id === id){return array.indexOf(item)}
    }
    return null;

// something weird going on with this function;
// the first item you choose, doesn't register like
// subsequent pokemon.  I think it had to do with this 
// function.  Not sure why it wouldn't like 
}