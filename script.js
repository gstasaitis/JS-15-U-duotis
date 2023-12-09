const topNumber = document.querySelectorAll("div[data-previous-operand]")
const botNumber = document.querySelectorAll("div[data-current-operand]")
const buttons = document.querySelectorAll("button")
const acButton = document.querySelectorAll("button[data-all-clear]")
const delButton = document.querySelectorAll("button[data-delete]")
const operation = document.querySelectorAll("button[data-operation]")
const equals = document.querySelectorAll("button[data-equals]")
const dataNumber = document.querySelectorAll("button[data-number]")

console.log(buttons)
console.log(botNumber)
console.log(topNumber)

function calculate(expression) {
    try {
        const result = new Function(`return ${expression}`)()
        return result
    } catch (error) {
        return 'Error'
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
        console.log(topNumber[0].innerText)
        console.log(botNumber[0].innerText)

        switch (button.innerText) {
            case "AC":
                botNumber.forEach(element => {
                    element.innerText = ""
                })
                break

            case "DEL":
                if (botNumber[0].innerText) {
                    botNumber.forEach(element => {
                        element.innerText = element.innerText.slice(0, -1)
                    })
                }
                break

            case "=":
                const expression = botNumber[0].innerText
                const result = calculate(expression)
                topNumber.forEach(element => {
                    element.innerText = `${expression} = ${result}`
                })
                botNumber.forEach(element => {
                    element.innerText = result
                })
                break

            default:
                botNumber.forEach(element => {
                    element.innerText += button.innerText
                })
        }
    })
})
