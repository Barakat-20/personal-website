// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegistration = "craps-game-registration"
const crapsMainSection = "craps-main-section"

function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(crapsUsernameInput).value 
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
    }

    
}

function removeRegistrctionPane (){
    document.getElementById(crapsGameRegistration).style.display = "none"
}

function showMainGameSection (){
    document.getElementById("craps-main-section").style.display = "block"
}