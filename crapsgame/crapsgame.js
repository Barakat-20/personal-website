//Craps Main Data
let crapsUsername = ""

//Craps Game Settings
const startingMoney = 1000
const startingRounds = 0
const bets ={
    even: "EVEN",
    odd: "ODD" 
}
const minBet = 100

// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegistration = "craps-game-registration"
const crapsMainSection = "craps-main-section"
const crapsStartsUsername = "craps-starts-username"
const crapsStartsMoney = "craps-starts-money"
const crapsStartsRounds = "craps-starts-rounds"
const crapsUserBetAmount= "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container"

//In-games variables
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minBet

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
    removeRegistrationPane ()
    showMainGameSection ()
    setupFirstRound ()
    }

    
}

function removeRegistrationPane (){
    document.getElementById(crapsGameRegistration).style.display = "none"
}

function showMainGameSection (){
    document.getElementById(crapsMainSection).style.display = "block"
}

function setupFirstRound (){
    document.getElementById(crapsStartsUsername).innerHTML = crapsUsername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney (currentMoney)
    setRounds (currentRounds)
    betEven()
    setBetAmount(minBet)
}

function setMoney (money){
    document.getElementById(crapsStartsMoney).innerHTML = money
}

function setRounds (round){
    document.getElementById(crapsStartsRounds).innerHTML = round
}

function betEven () {
    chooseBet(bets.even)
}

function betOdd () {
    chooseBet(bets.odd)
}


function chooseBet (bet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red"
    const deselectBet = bet == bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent"
}

function increaseBet() {
    setBetAmount(Math.min(currentBetAmount + minBet, currentMoney))
}

function decreaseBet() {
    setBetAmount(Math.max(currentBetAmount - minBet, minBet))
}

function setBetAmount (betAmount) {
    currentBetAmount = betAmount
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
}
function rollDice() {
    document.getElementById(crapsRollDiceButton).style.display = "none"
    const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: 2, callback: processDiceResult, delay: 10000000 });
}
function processDiceResult (diceResult) {
    console.log(diceResult)
}