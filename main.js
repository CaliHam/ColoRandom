//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');
var hex1 = document.querySelector('#hex1');
var hex2 = document.querySelector('#hex2');
var hex3 = document.querySelector('#hex3');
var hex4 = document.querySelector('#hex4');
var hex5 = document.querySelector('#hex5');
var allHex = document.querySelectorAll('.hexvalue')
var hex1color = document.querySelector('#color1')
var hex2color = document.querySelector('#color2')
var hex3color = document.querySelector('#color3')
var hex4color = document.querySelector('#color4')
var hex5color = document.querySelector('#color5')

//EVENT LISTENERS
window.addEventListener("load", function(event){
    event.preventDefault();
    displayHexCodes()
});
newPaletteButton.addEventListener('click', displayHexCodes);



//GLOBAL VARIABLES
var hexCharacters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
var hexCodeString;
var allCodes = [];


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
    var codeStrings = [];
    for(var i = 0; i < 5; i++){
        codeStrings.push(generateHexCode())
        }
        hex1.innerText = codeStrings[0];
        hex1color.style.backgroundColor = codeStrings[0];
        hex2.innerText = codeStrings[1];
        hex2color.style.backgroundColor = codeStrings[1];
        hex3.innerText = codeStrings[2];
        hex3color.style.backgroundColor = codeStrings[2];
        hex4.innerText = codeStrings[3];
        hex4color.style.backgroundColor = codeStrings[3];
        hex5.innerText = codeStrings[4];
        hex5color.style.backgroundColor = codeStrings[4];
        allCodes = codeStrings;
}


// console.log(codeStrings);