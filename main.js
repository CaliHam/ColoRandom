//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');
var hexContainers = document.querySelectorAll('.hex-containers');
var colorBoxWrapper = document.querySelector('.colorboxeswrapper');
var saveButton = document.querySelector('.save-button');
var savedPaletteBoxCont = document.querySelector('.saved-palette-box-container');
var noSavedText = document.querySelector('.no-saved');

//EVENT LISTENERS
window.addEventListener('load', function(event){
    event.preventDefault();
    var newPalette = generatePalette(currentPalette)
    currentPalette = newPalette
    displayHexCodes()    
});

saveButton.addEventListener('click', savePalette);

newPaletteButton.addEventListener('click', function() {
    var newPalette = generatePalette(currentPalette)
    currentPalette = newPalette    
    displayHexCodes()    
});

colorBoxWrapper.addEventListener('click', function(event) {
    if(event.target.classList.contains('unlock')) {
        toggleLocks(event);
    } 
    else if (event.target.classList.contains('lock')) {
        toggleLocks(event);
    }
});

//GLOBAL VARIABLES
var hexCharacters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
var savedPalettes = [];
var currentPalette = {
    hexColors: [{
        hexCode: '#EA9999',
        isLocked: false,
        id: 'color1'
    },
    {
        hexCode: '#FACB9C',
        isLocked: false,
        id: 'color2'
    },
    {
        hexCode: '#FFE59A',
        isLocked: false,
        id: 'color3'
    },
    {
        hexCode: '#B6D7A8',
        isLocked: false,
        id: 'color4'
    },
    {
        hexCode: '#A4C4CA',
        isLocked: false,
        id: 'color5'
    }],
    id: Date.now()
};

//JS 
function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function generateHexCode(){
    var hexCodes = [];
    for(var i = 0; i < 6; i++){
        var getRandomCharacter = hexCharacters[generateRandomIndex(hexCharacters)]
         hexCodes.push(getRandomCharacter)
    }
    var hexCodeString = '#' + hexCodes.join('')
    return hexCodeString
};

function generatePalette(currentPalette) {
    var newHexColors = [];
    for (var i = 0; i < currentPalette.hexColors.length; i++) {
        if (!currentPalette.hexColors[i].isLocked) {
            var hex = {
                hexCode: generateHexCode(),
                isLocked: false,
                id: `color${i+1}`
            };
            newHexColors.push(hex)
        } else {
            newHexColors.push(currentPalette.hexColors[i])
        }
    } 
    var updatedPalette = {
        hexColors: newHexColors,
        id: Date.now()
    }
    return updatedPalette
};

function displayMinis(){
    savedPaletteBoxCont.innerHTML = ""
    if (!savedPalettes.length){
        savedPaletteBoxCont.innerHTML = `<p class="no-saved"><em>No Saved Palettes</em></p>`
    }
    for (var i = 0; i<savedPalettes.length; i++) {
    savedPaletteBoxCont.innerHTML += `
    <div class="saved-palette-box-container" id="${savedPalettes[i].id}">
        <div class="mini-box" style="background-color: ${savedPalettes[i].hexColors[0].hexCode}"></div>
        <div class="mini-box" style="background-color: ${savedPalettes[i].hexColors[1].hexCode}"></div>
        <div class="mini-box" style="background-color: ${savedPalettes[i].hexColors[2].hexCode}"></div>
        <div class="mini-box" style="background-color: ${savedPalettes[i].hexColors[3].hexCode}"></div>
        <div class="mini-box" style="background-color: ${savedPalettes[i].hexColors[4].hexCode}"></div>
        <button class='delete-button'></button>
    </div>`
    }
    deleteButtons()
};

function deleteButtons() {
    var allDeleteButts = document.querySelectorAll('.delete-button') 
    allDeleteButts.forEach((container, index) => {
        container.addEventListener('click', function(){
            deletePalette(index)
        })
    })
}

function displayHexCodes(){
    hexContainers.forEach((hex, index) => {
        var box = hex.querySelector('.box')
        var hexValue = hex.querySelector('.hexvalue')
        box.style.backgroundColor = currentPalette.hexColors[index].hexCode
        hexValue.innerText = currentPalette.hexColors[index].hexCode
    })
};

function toggleLocks(e) {
    var selectedBox = e.target.closest('div')
    for (var i = 0; i < currentPalette.hexColors.length; i++) {
        if (currentPalette.hexColors[i].id === selectedBox.id) {
        currentPalette.hexColors[i].isLocked = !currentPalette.hexColors[i].isLocked;
        }
    }
    changeLock(e)
};

function changeLock(event) {
    event.target.classList.toggle('lock')
    event.target.classList.toggle('unlock')
};

function savePalette() {
    if(savedPalettes){
        noSavedText.innerText = "";
    } 
    if(savedPalettes.includes(currentPalette)){
        return
    } else {
        savedPalettes.push(currentPalette)
    }
    displayMinis()
};

function deletePalette(index){
    savedPalettes.splice(index, 1)
    displayMinis()
};