
const timeValueInputs = {
    presentValue: 5000000,
    futureValue: null,
    interestRate: 7,
    years: 5,
    compounding: {
        yearly: 1,
        monthly: 12,
        weekly: 52,
        daily: 365,
    }
}

const timeValueMoneyEquation = (timeValueInputs) => {
    numberOfPeriods = timeValueInputs.years * timeValueInputs.compounding.yearly;

    if (!timeValueInputs.futureValue) {
        futureValue = timeValueInputs.presentValue * (1 + (timeValueInputs.interestRate / 100)) ** numberOfPeriods;
        return futureValue.toFixed(2);
    }
    if (!timeValueInputs.presentValue) {
        presentValue = timeValueInputs.futureValue / (1 + (timeValueInputs.interestRate / 100) ** numberOfPeriods)
        return presentValue.toFixed(2)
    }
    if (!timeValueInputs.interestRate) {
        interestRate = ((timeValueInputs.futureValue / timeValueInputs.presentValue) ** (1 / numberOfPeriods)) - 1;
        return interestRate.toFixed(2);
    }
    if (!timeValueInputs.years) {
        years = Math.log(futureValue / presentValue) / Math.log(1 + (timeValueInputs.interestRate / 100))
        return years;
    }
}


const annuityInputs = {
    annuityPayments: 20000,
    interestRate: 9,
    years: 30,
    infinitly: false,
    ordinary: true,
}

const annuityInvestmentEquation = (annuityInputs) => {
    if (annuityInputs.ordinary = true) {
        futureValue = annuityInputs.annuityPayments * ((((1+(annuityInputs.interestRate/100))**(years))-1)/(annuityInputs.interestRate/100));
        return `In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`;
    }
    if (annuityInputs.ordinary = false) {
        futureValue = annuityInputs.annuityPayments * ((((1+(annuityInputs.interestRate/100))**(years))-1)/(annuityInputs.interestRate/100)) * (1 + (interestRate / 100));
        return `In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`;
    }
}



const mortgageInfo = {
    interestRate: 8,
    years: 30,
    downPayment: 20000,
    mortgagecost: 120000,
}

const fixedMortgagePayment = (mortgageInfo) => {
    numOfPaymentyears = mortgageInfo.years * 12;
    remainingMortgage = mortgageInfo.mortgagecost - mortgageInfo.downPayment;
    monthlyIntRate = (mortgageInfo.interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentyears))) / (monthlyIntRate)
    monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    return `The monthly payment for your Mortgage will be $${monthlyPayment.toFixed(2)}.`;
}


console.log(timeValueMoneyEquation(timeValueInputs))
// console.log(annuityInvestmentEquation(annuityInputs))
// console.log(fixedMortgagePayment(mortgageInfo))