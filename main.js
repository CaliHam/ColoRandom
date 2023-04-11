//QUERY SELECTORS
var newPaletteButton = document.querySelector('.new-button');




//EVENT LISTENERS
// window.addEventListener(generateHexCode);
newPaletteButton.addEventListener('click', generateHexCode);



//GLOBAL VARIABLES
var hexCharacters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
var hexCodes = [];
var hexCodeString;


//JS 
//DATA MODEL- anything that is stored
function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateHexCode(){
    for(var i = 0; i < hexCharacters.length; i++){
      if(hexCodes.length < 6 ){
        var getRandomCharacter = hexCharacters[generateRandomIndex(hexCharacters)]
         hexCodes.push(getRandomCharacter)
        }
    }
    hexCodeString = '#' + hexCodes.join('')
    return hexCodeString
}


//DOM- INNERHTML/TEXT, anything we see on the page 


