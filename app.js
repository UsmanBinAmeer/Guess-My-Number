"use strict"
const containerEl = document.querySelector(".container")
const btnPlayer = document.querySelector(".btnAgain")
const btnCheckEl = document.querySelector(".btnCheck")
const hideNumEl = document.querySelector(".hideNumber")
const msgEl = document.querySelector(".msg")
const inputEl = document.querySelector(".inputNumber")
const highScoreEl = document.querySelector(".highScore")
const ScoreEl = document.querySelector(".score")


let randomNumber = Math.trunc(Math.random() * 20 + 1)
console.log(randomNumber);

let score = 20
let highScore = 0

btnCheckEl.addEventListener('click', () => {
    const guess = +inputEl.value

    //check empty input
    if (guess) {

        //not checked
        if (guess != randomNumber) {

            if (score > 1) {

                score--
                ScoreEl.textContent = score

                msgEl.textContent = guess > randomNumber ? "Too High" : "Too Low"
                ScoreEl.textContent = score

            } else {
                containerEl.style.backgroundColor = "#fff"
                ScoreEl.textContent = 0
                displayMsg("You've Lossed the Game")

            }
        } else {
            hideNumEl.textContent = randomNumber
            hideNumEl.style.width = "50%"
            hideNumEl.style.transition = "all 0.5s ease-in"
            containerEl.style.backgroundColor = "#e0d8d3"
            displayMsg("Congratulation You've Won the Game :)")

        }
    } else {
        displayMsg("Please Enter the  Number :(")
    }
})
const displayMsg = function (message) {
    msgEl.textContent = message
}
btnPlayer.addEventListener("click", () => {
    score = 20
    randomNumber = Math.floor(Math.random() * 20) + 1
    ScoreEl.textContent = score
    hideNumEl.textContent = "?"
    hideNumEl.style.width = "25%"
    hideNumEl.style.transition = "all 0.5s ease-in"
    containerEl.style.backgroundColor = "#ddd"
    displayMsg("Start Guessing...")
})
