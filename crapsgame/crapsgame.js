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
let canChangeBet = true

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

    setMoney (startingMoney)
    setRounds (startingRounds)
    betEven()
    setBetAmount(minBet)
}

function setMoney (money){
    currentMoney = money
    document.getElementById(crapsStartsMoney).innerHTML = money
}

function setRounds (round){
    currentRounds = round
    document.getElementById(crapsStartsRounds).innerHTML = round
}

function betEven () {
    chooseBet(bets.even)
}

function betOdd () {
    chooseBet(bets.odd)
}


function chooseBet (bet) {
    if (canChangeBet) {
        currentBet = bet
        document.getElementById(bet).style.backgroundColor = "red"
        const deselectBet = bet == bets.even ? bets.odd : bets.even
        document.getElementById(deselectBet).style.backgroundColor = "transparent"
    }
}

function increaseBet() {
    setBetAmount(Math.min(currentBetAmount + minBet, currentMoney))
}

function decreaseBet() {
    setBetAmount(Math.max(currentBetAmount - minBet, minBet))
}

function setBetAmount (betAmount) {
    if (canChangeBet) {
        currentBetAmount = betAmount
        document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
    }
}
function rollDice() {
    canChangeBet = false
    formatDiceScale ()
    document.getElementById(crapsRollDiceButton).style.display = "none"
    const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: 2, callback: delayedProcessDiceResult, delay: 10000000 });
}
window.addEventListener("resize", formatDiceScale);
function formatDiceScale () {
    const vw = window.innerWidth * 0.8
    const vh= window.innerHeight * 0.8
    const widthscale = Math.min(500, vw, vh)
    const heightscale =widthscale * 0.8
    const scale = heightscale/373.760
    
    document.getElementById(crapsRollDiceAnimationContainer).style.transform = "scale(" + scale + ")"
}

function delayedProcessDiceResult (diceResult) {
    setTimeout(function() {processDiceResult(diceResult) }, 1000)
}
function processDiceResult (diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0)
    let diceSumResult = bets.even
    if (sum % 2 === 1){
        diceSumResult = bets.odd
    }
    setRounds(currentRounds + 1)
    if (diceSumResult === currentBet) {
        //alert("YOU WIN")
        setMoney(currentMoney + currentBetAmount)
    }else {
        //alert("YOU LOSE")
        setMoney(currentMoney - currentBetAmount)
    }
}