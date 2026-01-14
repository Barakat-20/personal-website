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

//Craps Dice Roll Settings

const numDiceToRoll = 2
const hideDiceDelayMs = 10000000
const processDiceResultDelayMs = 1800

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
const crapsBettingGridContainer = "craps-betting-grid-container"
const crapsRoundFinishGridContainer = "craps-round-finish-grid-container"
const crapsRoundFinishMessage = "craps-round-finish-message"
const crapsNextRoundButtonDisabled = "craps-next-round-button-disabled"
const crapsNextRoundButton = "craps-next-round-button"

//In-games variables

let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minBet
let canChangeBet = true

// HTML ELEMENT Manupulation Functions

function showElement (elementId) {
    document.getElementById(elementId).style.display = "block"
}

function hideElement (elementId) {
   document.getElementById(elementId).style.display = "none" 
}
function showRegistrationPane (){
    showElement(crapsGameRegistration)
}

function removeRegistrationPane (){
    hideElement(crapsGameRegistration)
}

function showMainGameSection (){
    showElement(crapsMainSection)
}

function hideMainGameSection (){
    hideElement(crapsMainSection)
}

// Game Starting Point

function registerCrapsPlayer() {
    crapsUsername = document.getElementById(crapsUsernameInput).value 

    //Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least five characters long, alphanumeric only, no spaces, and cannot start with a number!")
    }
    else{
    removeRegistrationPane ()
    showMainGameSection ()
    setupFirstRound ()
    }
}

// Round Management Functions

function setupFirstRound (){
    document.getElementById(crapsStartsUsername).innerHTML = crapsUsername
    hideElement(crapsNextRoundButtonDisabled)
    setMoney (startingMoney)
    setRounds (startingRounds)
    betEven()
    setBetAmount(minBet)
    setupNextRound()
}

function setupNextRound() {
    hideElement(crapsRollDiceAnimationContainer)
    hideElement(crapsRoundFinishGridContainer)
    showElement(crapsRollDiceButton)
    showElement(crapsBettingGridContainer)
    canChangeBet = true
    setBetAmount(minBet)
}
// User Score Setting

function setMoney (money){
    currentMoney = money
    document.getElementById(crapsStartsMoney).innerHTML = money
}

function setRounds (round){
    currentRounds = round
    document.getElementById(crapsStartsRounds).innerHTML = round
}

// Manage User Bet Selection

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

// Roll Dice And Processe Results

function rollDice() {
    canChangeBet = false
    formatDiceScale ()
    showElement(crapsRollDiceAnimationContainer)
    hideElement(crapsRollDiceButton)
    const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: numDiceToRoll, callback: delayedProcessDiceResult, delay: hideDiceDelayMs});
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
    setTimeout(function() {processDiceResult(diceResult) }, processDiceResultDelayMs)
}

function processDiceResult (diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0)
    let diceSumResult = bets.even
    if (sum % 2 === 1){
        diceSumResult = bets.odd
    }
    setRounds(currentRounds + 1)
    let roundFinishMessage = ""
    if (diceSumResult === currentBet) {
        roundFinishMessage = "YOU WIN!"
        setMoney(currentMoney + currentBetAmount)
    }else {
        roundFinishMessage = "YOU LOSE😂"
        setMoney(currentMoney - currentBetAmount)
    }
    if (currentMoney === 0) {
        roundFinishMessage = "YOU'RE OUT!"
        document.getElementById(crapsNextRoundButtonDisabled).style.display = "block"
        hideElement(crapsNextRoundButton)
    }
    hideElement(crapsBettingGridContainer)
    showElement(crapsRoundFinishGridContainer)
    document.getElementById(crapsRoundFinishMessage).innerHTML = roundFinishMessage
}

//Exit Game

function exitGame() {
    alert("After playing " + currentRounds + " rounds, you leave with " + "$" + currentMoney)
    hideMainGameSection()
    showRegistrationPane ()
    document.getElementById(crapsUsernameInput).value = ""
}