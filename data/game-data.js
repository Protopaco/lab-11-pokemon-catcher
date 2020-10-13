
let gameKey = 'gameData';


export function getGameData(){
    let temp = JSON.parse((localStorage).getItem(gameKey));
    
    return ( temp ? temp : []);

}

export function sendGameData(newGameData){
    localStorage.setItem(gameKey, JSON.stringify(newGameData));
}

export function clearGameData(){
    localStorage.removeItem(gameKey);
}