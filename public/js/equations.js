// user inputs to calulate Time value of money equations
const timeValueInputs = {
    presentValue: 14146.40,
    futureValue: 19166,
    interestRate: null,
    years: 5,
    compounding: {
        yearly: 1,
        monthly: 12,
        weekly: 52,
        daily: 365,
    }
}

//polymorphus equation for calculating different variables of Time Value of Money based on user input
const timeValueMoneyEquation = (timeValueInputs) => {
    numberOfPeriods = timeValueInputs.years * timeValueInputs.compounding.yearly;

    if (!timeValueInputs.futureValue) {
        futureValue = timeValueInputs.presentValue * (1 + (timeValueInputs.interestRate / 100)) ** numberOfPeriods;
        console.log(`The future value of your investment will be ${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
    if (!timeValueInputs.presentValue) {
        presentValue = timeValueInputs.futureValue * (1 / ((1 + timeValueInputs.interestRate / 100) ** (numberOfPeriods)))
        console.log(`The present value of this investment is $${presentValue.toFixed(2)}`);
        return presentValue.toFixed(2);
    }
    if (!timeValueInputs.interestRate) {
        interestRate = ((((timeValueInputs.futureValue / timeValueInputs.presentValue) ** (1 / numberOfPeriods))) - 1) * 100;
        console.log(`The interest rate needed to reach your investment goal is ${interestRate.toFixed(2)}`)
        return interestRate.toFixed(2);
    }
    if (!timeValueInputs.years) {
        years = Math.log(timeValueInputs.futureValue / timeValueInputs.presentValue) / Math.log(1 + (timeValueInputs.interestRate / 100))
        console.log(`Youll reach your investment goal in ${years.toFixed(2)}`)
        return years.toFixed(2);
    }
}
timeValueMoneyEquation(timeValueInputs)
//----------------------------------------------------------------------------------------------------------------//

// inputs needed to calculate future value of annuities
const annuityInputs = {
    annuityPayments: 20000,
    interestRate: 9,
    years: 30,
    ordinary: true,
}
// will calculate the future value of an annuity, depending on whether it is a ordinary annuity or annuity due.
const annuityInvestmentEquation = (annuityInputs) => {
    if (annuityInputs.ordinary = true) {
        futureValue = annuityInputs.annuityPayments * ((((1 + (annuityInputs.interestRate / 100)) ** (annuityInputs.years)) - 1) / (annuityInputs.interestRate / 100));
        console.log(`In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
    if (annuityInputs.ordinary = false) {
        futureValue = annuityInputs.annuityPayments * ((((1 + (annuityInputs.interestRate / 100)) ** (annuityInputs.years)) - 1) / (annuityInputs.interestRate / 100)) * (1 + (interestRate / 100));
        console.log(`In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
}
//---------------------------------------------------------------------------------------------------------//

// inputs to calculate mortgage payments
const mortgageInfo = {
    interestRate: 3.5,
    years: 30,
    downPayment: 0,
    mortgagecost: 150000,
    additionalPrincipalPayment: 0
}
// equations for calculating monthly mortage payments
const fixedMortgagePayment = (mortgageInfo) => {
    numOfPaymentPeriods = mortgageInfo.years * 12;
    remainingMortgage = mortgageInfo.mortgagecost - mortgageInfo.downPayment;
    monthlyIntRate = (mortgageInfo.interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentPeriods))) / (monthlyIntRate)
    monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    console.log(`The monthly payment for your Mortgage will be $${monthlyPayment.toFixed(2)}.`)
    GraphingMortgagePaymentData(fixedMortgagePayment);
    return monthlyPayment.toFixed(2);
}
// calculated a series of each interest payment, principle payment, and remaining principles on a monthly bases and pushed them into an array for graphing 
const GraphingMortgagePaymentData = () => {
    var remainingPrinciple = remainingMortgage;
    const graphPrinciplePayments = [];
    const graphInterestPayments = [];
    const graphRemainingPrincipleTotal = [];
    for (let i = numOfPaymentPeriods; i > 0; i--) {
        var interestPayment = (remainingPrinciple * ((mortgageInfo.interestRate / 100) / 12));
        graphInterestPayments.push(interestPayment.toFixed(2))
        var principlePayment = monthlyPayment.toFixed(2) - interestPayment;
        graphPrinciplePayments.push(principlePayment.toFixed(2))
        remainingPrinciple -= principlePayment;
        graphRemainingPrincipleTotal.push(remainingPrinciple.toFixed(2))
    }
    const yearlygraphPrinciplePayments = []
    const yearlygraphInterestPayments = []
    const yearlygraphRemainingPrincipleTotal = []
    yearlygraphPrinciplePayments.push(graphPrinciplePayments[0])
    yearlygraphInterestPayments.push(graphInterestPayments[0])
    yearlygraphRemainingPrincipleTotal.push(graphRemainingPrincipleTotal[0])
    for (let index = 12; index < numOfPaymentPeriods; index++) {
        if (index % 12 == 0) {
            yearlygraphPrinciplePayments.push(graphPrinciplePayments[index - 1])
            yearlygraphInterestPayments.push(graphInterestPayments[index - 1])
            yearlygraphRemainingPrincipleTotal.push(graphRemainingPrincipleTotal[index - 1])
        }

    }



    return { yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }

}

fixedMortgagePayment(mortgageInfo);

const { yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }
    = GraphingMortgagePaymentData()
const ctx = document.getElementById('chart')
const mixedChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Remaining Principle $',
            data: yearlygraphRemainingPrincipleTotal,
        }, {
            type: 'line',
            label: 'Principle Payment $',
            data: yearlygraphPrinciplePayments,
        },
        {
            type: 'line',
            label: 'Interest Payment $',
            data: yearlygraphInterestPayments,
        }],
        labels: []
    },

});


// addEventListener('click',timeValueMoneyEquation)
// addEventListener('click',annuityInvestmentEquation)
// addEventListener('click',fixedMortgagePayment)