import { myTimer } from "./myTimer.js";
import { myCalculator } from "./myCalculator.js";

export let renderTimer = () => {
    document.querySelector(".show-app").innerHTML = ""
    document.querySelector(".show-app").insertAdjacentHTML("beforeend", `
    <input id="timer" type="time" step="2">
                <button class="timer-play">></button>
                <input class="timer-reset" type="reset">
                <button class="timer-pause">||</button>
    `)
    myTimer()
}

export let renderCalculator = () => {
    document.querySelector(".show-app").innerHTML = ""
    document.querySelector(".show-app").insertAdjacentHTML("beforeend", `
    <form id="datecalc">
        <h3>Калькулятор дат</h3>
        <label>
            <strong>Первая дата:</strong>
            <input type="date" name="firstDate" />
        </label>
        <label>
            <strong>Вторая дата:</strong>
            <input type="date" name="secondDate" />
        </label>
        <button type="submit">Расчитать промежуток</button>
        <p id="datecalc__result"></p>
    </form>
    `)
    myCalculator()
}