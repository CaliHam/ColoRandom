//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');
var hex1 = document.querySelector('#hex1');
var hex2 = document.querySelector('#hex2');
var hex3 = document.querySelector('#hex3');
var hex4 = document.querySelector('#hex4');
var hex5 = document.querySelector('#hex5');
var allHex = document.querySelectorAll('.hexvalue')

//EVENT LISTENERS
window.addEventListener("load", function(event){
    event.preventDefault();
    displayHexCodes()
});
newPaletteButton.addEventListener('click', displayHexCodes);



//GLOBAL VARIABLES
var hexCharacters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
var hexCodeString;
var codeStrings = [];


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
    hexCodeString = '#' + hexCodes.join('')
    return hexCodeString
    }



//DOM- INNERHTML/TEXT, anything we see on the page 
function displayHexCodes(){
    for(var i = 0; i < 5; i++){
    codeStrings.push(generateHexCode)
    }
    hex1.innerText = generateHexCode();
    hex2.innerText = generateHexCode();
    hex3.innerText = generateHexCode();
    hex4.innerText = generateHexCode();
    hex5.innerText = generateHexCode();
}

