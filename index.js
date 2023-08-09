const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const characNumb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const characLett = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"]
const characSpec = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

document.getElementById("lengthInput").value = 15

let pw1 = ""
let pw2 = ""



let output1El = document.getElementById("output1-el")
let output2El = document.getElementById("output2-el")
let pwLength = document.getElementById("lengthInput").value

let numbers = document.getElementById("numberToggle-el")
let character = document.getElementById("characterToggle-el")
let special = document.getElementById("specialToggle-el")

let numbersOn = true
let charactersOn = true
let specialsOn = true



numbers.textContent = "On"
numbers.style.color = '#059669'
character.textContent = "On"
character.style.color = '#059669'
special.textContent = "On"
special.style.color = '#059669'


function toggleNumbers(){
    if (numbersOn === true){
        numbersOn = false
        numbers.textContent = "Off"
        numbers.style.color = '#6B7280'
    }else {
        numbersOn = true
        numbers.textContent = "On"
        numbers.style.color = '#059669'
    }
}

function toggleCharacters(){
    if (charactersOn === true){
        charactersOn = false
        character.textContent = "Off"
        character.style.color = '#6B7280'
    }else {
        charactersOn = true
        character.textContent = "On"
        character.style.color = '#059669'
    }
}

function toggleSpecials(){
    if (specialsOn === true){
        specialsOn = false
        special.textContent = "Off"
        special.style.color = '#6B7280'
    }else {
        specialsOn = true
        special.textContent = "On"
        special.style.color = '#059669'
    }
}

function genRanItem(){
    let sum = []

    if (numbersOn === true){
        sum.push(characNumb[Math.floor(Math.random() * characNumb.length)])
    }
    if (charactersOn === true){
        sum.push(characLett[Math.floor(Math.random() * characLett.length)])
    }
    if (specialsOn === true){
        sum.push(characSpec[Math.floor(Math.random() * characSpec.length)])
    }

    return sum[Math.floor(Math.random() * sum.length)]
}

function generatePw(){
    
    pwLength = document.getElementById("lengthInput").value
    if (pwLength > 20){
        pwLength = 20
        document.getElementById("lengthInput").value = 20
    }
    
    for (i = 0; i < pwLength; i++){
        pw1 += genRanItem()
        pw2 += genRanItem()
    }

    output1El.textContent = pw1
    output2El.textContent = pw2

}


/*function altGenPw(){
    let sum = []
    
    if (numbersOn === true){
        for (i = 0; i < characNumb; i++){
            sum.push(characNumb[i])
        }
    }
    if (charactersOn === true){
        for (i = 0; i < characLett; i++){
            sum.push(characLett[i])
        }
    }
    if (specialsOn === true){
        for (i = 0; i < characSpec; i++){
            sum.push(characSpec[i])
        }
    }

    for (i = 0; i < pwLength; i++){
        pw1 += sum[Math.floor(Math.random() * sum.length)]
        pw2 += sum[Math.floor(Math.random() * sum.length)]
    }

    output1El.textContent = pw1
    output2El.textContent = pw2

}*/