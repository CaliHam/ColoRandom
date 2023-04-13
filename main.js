//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');
var lockButton = document.querySelectorAll('.lock')
var unlockButton = document.querySelectorAll('.unlock')
var hexContainers = document.querySelectorAll('.hex-containers')
var colorBoxWrapper = document.querySelector('.colorboxeswrapper')
var saveButton = document.querySelector('.save-button')

//EVENT LISTENERS
window.addEventListener("load", function(event){
    event.preventDefault();
    generatePalette(currentPalette)
    displayHexCodes()    
});

newPaletteButton.addEventListener('click', function() {
    generatePalette(currentPalette)
    displayHexCodes()    
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
}


//JS 
//DATA MODEL- anything that is stored
function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateHexCode(){
    var hexCodes = [];
    for(var i = 0; i < 6; i++){
        var getRandomCharacter = hexCharacters[generateRandomIndex(hexCharacters)]
         hexCodes.push(getRandomCharacter)
    }
    var hexCodeString = '#' + hexCodes.join('')
    return hexCodeString
    }


//DOM- INNERHTML/TEXT, anything we see on the page 
function generatePalette(currentPalette) {
    for (var i = 0; i < currentPalette.hexColors.length; i++){
        if (!currentPalette.hexColors[i].isLocked) {
            currentPalette.hexColors[i].hexCode = generateHexCode()
        }
    }  
    return currentPalette
}

function displayHexCodes(){
    hexContainers.forEach((hex, index) => {
        var box = hex.querySelector('.box')
        var hexValue = hex.querySelector('.hexvalue')
        box.style.backgroundColor = currentPalette.hexColors[index].hexCode
        hexValue.innerText = currentPalette.hexColors[index].hexCode
    })
}

colorBoxWrapper.addEventListener('click', function(event) {
    if(event.target.classList.contains('unlock')) {
        toggleLocks(event);
    } 
    else if (event.target.classList.contains('lock')) {
        toggleLocks(event);
    }
});

function toggleLocks(e) {
    var selectedBox = e.target.closest('div')
    for (var i = 0; i < currentPalette.hexColors.length; i++) {
        if (currentPalette.hexColors[i].id === selectedBox.id) {
        currentPalette.hexColors[i].isLocked = !currentPalette.hexColors[i].isLocked;
        }
    }
    changeLock(e)
}

function changeLock(event) {
    event.target.classList.toggle('lock')
    event.target.classList.toggle('unlock')
}

saveButton.addEventListener('click', savePalette)

function savePalette() {
    savedPalettes.push(currentPalette)
    console.log(savedPalettes)
}