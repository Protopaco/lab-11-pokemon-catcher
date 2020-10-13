
//  renderCaptureList takes the chosen pokemon and roundCount
// and creates HTML elements to display the chosen pokemon
// in the captured list
export function renderCaptureList(pokemon, roundCount){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');

    div.classList.add('captured');

    p.classList.add('round-num');
    p.textContent = roundCount;

    img.classList.add('poke-captured');
    img.src = pokemon.url_image;

    div.appendChild(p);
    div.appendChild(img);

    return div;
}