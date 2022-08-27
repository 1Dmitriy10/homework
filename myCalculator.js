import getDateDiff from './getDateDiff.js'




export let myCalculator = () => {
    const form = document.getElementById("datecalc")
    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)

        const firstDate = formData.get('firstDate')
        const secondDate = formData.get('secondDate')

        if (!firstDate || !secondDate) {
            printError('Oooppppss -> put date')
        } else {
            const dateDiff = getDateDiff(firstDate, secondDate)

            printResult(dateDiff)
        }
    }

    const result = document.getElementById("datecalc__result")

    const printError = (textErr) => {
        result.innerText = textErr
    }

    const printResult = ({ years, months, days }) => {
        result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
    }
}