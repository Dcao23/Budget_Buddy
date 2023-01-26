
const finances = {
    presentValue: 0,
    futureValue: 0,
    interestRate: 0,
    years: 0
}

const timeValueMoneyEquation = (finances) => {
    if (!finances.futureValue) {
        futureValue = presentValue * (1 + (interestRate / 100)) ** years;
        return futureValue.toFixed(2);
    }
    if (!finances.presentValue) {
        presentValue = futureValue / (1 + (interestRate / 100) ** years)
        return presentValue.toFixed(2)
    }
    if (!object.interestRate) {
        interestRate = ((futureValue / presentValue) ** (1 / years)) - 1;
        return interestRate.toFixed(2);
    }
    if (!finances.years) {
        years = Math.log(futureValue / presentValue) / Math.log(1 + (interestRate / 100))
        return years;
    }
}


const annuityCalculation = {
    annuityPayments: false,
    annuityAmount:0,
    interestRate: 6.25,
    years: 10,
    compounding: false,
    yearly: false,
    monthly: false,
    quarterly: false,
    weekly: false,
    daily: false,
    infinitly: false,
    ordinary: true,
    due: false
}

const annuityInvestmentEquation = (annuityCalculation) => {
    periods = annuityCalculation.years / 12;
    presentValue = annuityCalculation.loanAmount - annuityCalculation.downPayment;
    if (annuityCalculation.ordinary = true) {
        annuity = ((interestRate / 100) * annuityCalculation.presentValue) / (1 - (1 + (interestRate / 100) ** (1 / periods)));
        return annuity;
    }
    if (annuityCalculation.due = true) {
        annuity = ((interestRate / 100) * annuityCalculation.presentValue) / ((1 - (1 + (interestRate / 100)) ** (1 / periods)) * (1 + (interestRate / 100)));
        return (annuity / 12);
    }
}


const mortgageInfo = {
    interestRate: 8,
    years: 30,
    downPayment: 20000,
    mortgagecost: 120000,
}

const fixedMortgagePayment = (mortgageInfo) => {
    numOfPaymentPeriods = mortgageInfo.years * 12;
    remainingMortgage = mortgageInfo.mortgagecost - mortgageInfo.downPayment;
    monthlyIntRate = (mortgageInfo.interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentPeriods)))/(monthlyIntRate)
    monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    return `The monthly payment for your Mortgage will be $${monthlyPayment.toFixed(2)}.`;
}
console.log(fixedMortgagePayment(mortgageInfo))