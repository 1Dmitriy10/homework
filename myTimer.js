import { renderTimer } from "./render.js"
import { alarm, alarmStop } from "./alarm.js"

export let myTimer = () => {
    let pause = false
    let playTimer = () => {
        let time = document.querySelector("#timer").value.split(":")
        let h = time[0]
        let m = time[1]
        let s = time[2]
        let timer = setInterval(() => {
            if (!pause) {
                do {
                    s--
                    s = s < 10 ? `0${s}` : s
                } while (s < 0)
                if (s == 0 && m > 0) {
                    m--
                    s = 59
                    m = m < 10 ? `0${m}` : m
                }
                else if (s == 0 && m == 0 && h > 0) {
                    h--
                    m = 59
                    s = 59
                    h = h < 10 ? `0${h}` : h
                }
                else if (s == 0 && m == 0 && h == 0) {
                    clearInterval(timer);
                    alarm()
                }
                document.querySelector("#timer").value = `${h}:${m}:${s}`
            }
        }, 1000);
    }

    let choiceAction = e => {
        console.log(e.target.className)
        switch (e.target.className) {
            case "timer-play":
                pause = false
                playTimer()
                break
            case "timer-pause":
                pause = true
                break
            case "timer-reset":
                pause = true
                renderTimer()
                alarmStop()
                break
        }
    }

    document.querySelector(".show-app").addEventListener("click", choiceAction)
}