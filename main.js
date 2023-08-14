const divContainer = document.getElementById('main-container');
divContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
divContainer.style.gridTemplateRows = 'repeat(16, 1fr)';


divMaker()

function divMaker (){
    for(i = 0; i < 256; i++){
        let div = document.createElement('div');
        div.classList.add('squares');
        divContainer.appendChild(div)
    }
}

