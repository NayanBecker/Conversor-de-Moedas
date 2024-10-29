const USD = 5.72;
const EUR = 6.16;
const GBP = 7.41;

const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const currency = document.getElementById("currency")
const amount = document.getElementById("amount")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Create input amount to get only numbers
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "₤")
            break;
    } 


}

function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)

    try {

        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        

        let total = amount * price
       
        result.textContent = formatCurrencyBRL(total)

        footer.classList.add("show-result")
    } catch (costumeError) {
        costumeError = ("Não for possível converter. Tente novamente")
        alert(costumeError)
        console.log(costumeError)
        footer.classList.remove("show-result")
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}