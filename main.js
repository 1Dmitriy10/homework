import { renderTimer, renderCalculator } from "./render.js"

let choiceRender = e => {
    // if (e.target.innerHTML)
    switch (e.target.innerHTML) {
        case "таймер":
            renderTimer()
            break
        case "калькулятор":
            renderCalculator()
            break
    }
}

document.querySelector(".nav-app").addEventListener("click", choiceRender)