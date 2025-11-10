// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegistration = "craps-game-registration"
const crapsMainSection = "craps-main-section"

function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(crapsUsernameInput).value 
    alert("Got: " + crapsUsername)
    removeRegistrctionPane ()
    showMainGameSection ()
}

function removeRegistrctionPane (){
    document.getElementById(crapsGameRegistration).style.display = "none"
}

function showMainGameSection (){
    document.getElementById("craps-main-section").style.display = "block"
}