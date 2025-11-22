//Craps Main Data
let crapsUsername = ""

//Craps Game Settings
const startingMoney = 1000
const startingRounds = 10

// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegistration = "craps-game-registration"
const crapsMainSection = "craps-main-section"
const crapsStartsUsername = "craps-starts-username"
const crapsStartsMoney = "craps-starts-money"
const crapsStartsRounds = "craps-starts-rounds"

//In-games variables
let currentMoney = startingMoney
let currentRounds = startingRounds

function registerCrapsPlayer() {
    crapsUsername = document.getElementById(crapsUsernameInput).value 
    //alert("Got: " + crapsUsername)


    //Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    let matchedInvalidChar = firstCharIsDigitRegex.test(crapsUsername)
    
    let usernameIsNotValid = crapsUsername.length < 5

    if(usernameIsNotValid || matchedInvalidChar){
        alert("Username must be at least five characters long, alphanumeric only, no spaces, and cannot start with a number!")
    }
    else{
    removeRegistrctionPane ()
    showMainGameSection ()
    setupFirstRound ()
    }

    
}

function removeRegistrctionPane (){
    document.getElementById(crapsGameRegistration).style.display = "none"
}

function showMainGameSection (){
    document.getElementById(crapsMainSection).style.display = "block"
}

function setupFirstRound (){
    document.getElementById(crapsStartsUsername).innerHTML = crapsUsername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney (startingMoney)
    setRounds (currentRounds)
}

function setMoney (money){
    document.getElementById(crapsStartsMoney).innerHTML = money
}

function setRounds (round){
    document.getElementById(crapsStartsRounds).innerHTML = round
}

