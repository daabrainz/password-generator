const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generatePasswordOne() {
    let passwordOne = "";
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += getRandomCharacter();
    }
    return passwordOne;
}

function generatePasswordTwo() {
    let passwordTwo = "";
    for (let i = 0; i < passwordLength; i++) {
        passwordTwo += getRandomCharacter();
    }
    return passwordTwo;
}

function generateAllPasswords() {
    const passwordOne = generatePasswordOne();
    const passwordTwo = generatePasswordTwo();
    document.getElementById("passwordField1").value = passwordOne;
    document.getElementById("passwordField2").value = passwordTwo;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Passwort wurde in die Zwischenablage kopiert!");
        })
        .catch(err => {
            console.error("Fehler beim Kopieren:", err);
        });
}

document.getElementById("passwordField1").addEventListener("click", function() {
    copyToClipboard(this.value);
});

document.getElementById("passwordField2").addEventListener("click", function() {
    copyToClipboard(this.value);
});






