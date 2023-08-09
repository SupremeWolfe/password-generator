const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let output1El = document.getElementById("output1-el")
let output2El = document.getElementById("output2-el")
let pwLength = 15

function generatePw(){
    let pw1 = ""
    let pw2 = ""

    for (i = 0; i < pwLength; i++){
        random = Math.floor(Math.random() * characters.length)
        console.log(random)
        pw1 += characters[random]
        random = Math.floor(Math.random() * characters.length)
        pw2 += characters[random]
    }

    output1El.textContent = pw1
    output2El.textContent = pw2
}