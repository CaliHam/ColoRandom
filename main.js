//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');
var lockButton = document.querySelectorAll('.lock')
var unlockButton = document.querySelectorAll('.unlock')
var hexContainers = document.querySelectorAll('.hex-containers')
var colorBoxWrapper = document.querySelector('.colorboxeswrapper')

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
// var hexCodeString;
// var allCodes = [];
var currentPalette = {
    hexColors: [{
        hexCode: '#EA9999',
        isLocked: false
    },
    {
        hexCode: '#FACB9C',
        isLocked: false
    },
    {
        hexCode: '#FFE59A',
        isLocked: false
    },
    {
        hexCode: '#B6D7A8',
        isLocked: false
    },
    {
        hexCode: '#A4C4CA',
        isLocked: false
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
    console.log(currentPalette.hexColors.isLocked)
    for (var i = 0; i < currentPalette.hexColors.length; i++){
        if (!currentPalette.hexColors[i].isLocked) {
            currentPalette.hexColors[i].hexCode = generateHexCode()
        }
    }
    console.log(currentPalette)  
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

// function toggleLocks(event) {
//     event.target.classList.toggle('unlock');
//     event.target.classList.toggle('lock');
// }


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
    console.log(selectedBox)
    for (var i = 0; i < currentPalette.hexColors.length; i++) {
        if (currentPalette.hexColors[i].hexCode == selectedBox.hexCode) {
        currentPalette.hexColors[i].isLocked = !currentPalette.hexColors[i].isLocked;
        }
    console.log(currentPalette.hexColors.isLocked)
    }
    changeLock(e)
}

function changeLock(event) {
    if (currentPalette.hexColors.isLocked) {
        console.log('unlock')
        event.target.classList.toggle('unlock')
        event.target.classList.toggle('lock')
    } else {
        console.log('lock')
        event.target.classList.toggle('lock')
        event.target.classList.toggle('unlock')
    }
}

// for (let i = 0; i < unlockButton.length; i++) {
//     unlockButton[i].addEventListener("click", function() {
//       unlockButton[i].classList.toggle("unlock");
//       unlockButton[i].classList.toggle("lock");
//       switchLocks()
//     });
// }

// function switchLocks() {
    
// }