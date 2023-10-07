
const currencies = [
    "USD($)" , "GBP()", "EUR($)"
]
const conversionRates = {
    "Black Market" : [950,456,567],
    "Central Bank of Nigeria" : [1000,390,567],
    "Bureau De Change" : [500, 670, 780],
    "Moneygram" : [800, 650,750],
    "Western Union" : [450,390,567],
    "Fx": [950, 450, 750]
}



document.addEventListener("DOMContentLoaded", loadOptions)

const conversionSelect = document.querySelector('Select.conversion_rates')
const conversionText = document.querySelector('div.conversion_text')
const currencySelect = document.querySelector('Select.currencies')
const nairaInput = document.querySelector('input.naira_input')
const currencyInput = document.querySelector('input.foreign_currency_input')

const ratesList = Object.keys(conversionRates)

let selectedConversion = 0;
let selectedCurrency = 0;


function loadOptions (e) {
    ratesList.forEach((item,index) => {
        conversionSelect.innerHTML += `<option value=${index}>${item}</option>`
        })

        currencies.forEach((item,index) => {
        currencySelect.innerHTML += `<option value=${index}>${item}</option>`
        })

}


function changeConversion(event){
   selectedConversion = event.target["selectedIndex"]
   let conversionRateText = ratesList[selectedConversion]
   conversionText.innerHTML = `<p> 1  ${currencies[selectedCurrency]} = ${conversionRates[conversionRateText][selectedCurrency]} naira (@${conversionRateText})</p>`
   updateCurrencyValue()
}

function changeCurrency (event){
   selectedCurrency = event.target["selectedIndex"]
   let conversionRateText = ratesList[selectedConversion]
   conversionText.innerHTML = `<p> 1  ${currencies[selectedCurrency]} = ${conversionRates[conversionRateText][selectedCurrency]} naira (@${conversionRateText})</p>`
   updateCurrencyValue()
}

function calculateNaira (event){
   let conversionRateText = ratesList[selectedConversion]
   let factor = conversionRates[conversionRateText][selectedCurrency]
   nairaInput.value = event.target.value * factor
}

function calculateCurrency (event){
   let conversionRateText = ratesList[selectedConversion]
   let factor = conversionRates[conversionRateText][selectedCurrency]
   currencyInput.value = event.target.value / factor
}

function updateCurrencyValue(){
    let conversionRateText = ratesList[selectedConversion]
   let factor = conversionRates[conversionRateText][selectedCurrency]
   currencyInput.value = nairaInput.value / factor
}








