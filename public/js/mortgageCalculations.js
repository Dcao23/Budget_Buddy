
// inputs to calculate mortgage payments
 
   
      

// equations for calculating monthly mortage payments
function fixedMortgagePayment () {



    var interestRate= ($("#interestRate").val());
    var years= $("#years").val();
    var downPayment= $('#downPayment').val();
    var mortgagecost=  $("#loanAmount").val();
 


    numOfPaymentPeriods = years * 12;
    var remainingMortgage = mortgagecost - downPayment;
    monthlyIntRate = (interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentPeriods))) / (monthlyIntRate)
    var monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    totalamounttopay = monthlyPayment * numOfPaymentPeriods
   FixedMonthlyPay = monthlyPayment.toFixed(2)
    console.log(downPayment)
    console.log(mortgagecost)
    console.log(interestRate)
    console.log(years)

    var loanADiv =  document.getElementById('la')
    loanADiv.textContent = (`$${remainingMortgage.toLocaleString()}`)
var monPayDiv = document.getElementById('mp')
    monPayDiv.textContent= (`$${FixedMonthlyPay.toLocaleString()}`)

// calculated a series of each interest payment, principle payment, and remaining principles on a monthly bases and pushed them into an array for graphing 
    
    var remainingPrinciple = remainingMortgage;
    const graphPrinciplePayments = [];
    const graphInterestPayments = [];
    const graphRemainingPrincipleTotal = [];
    for (let i = numOfPaymentPeriods; i > 0; i--) {
        var interestPayment = (remainingPrinciple * ((interestRate / 100) / 12));
        graphInterestPayments.push(interestPayment.toFixed(2))
        var principlePayment = monthlyPayment.toFixed(2) - interestPayment;
        graphPrinciplePayments.push(principlePayment.toFixed(2))
        remainingPrinciple -= principlePayment;
        graphRemainingPrincipleTotal.push(remainingPrinciple.toFixed(2))
    }
    let totalInterestPayment = graphInterestPayments.reduce((a,b)=>{
        return (Number(a) || 0) + (Number(b) || 0);
    }, 10);
    
    const graphYears = []
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
    
    for (let i = 1; i< years ; i++ ){
        graphYears.push(`Year ${i}`);

    }
    var totalDiv =  document.getElementById('tcol')
    totalDiv.textContent= (`$${totalamounttopay.toLocaleString()}`)
    var totalIntDiv =  document.getElementById('ti')
    totalIntDiv.textContent=(`$${totalInterestPayment.toLocaleString()}`)


const ctx = document.getElementById('principleChart')
const graphChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Remaining Principle $',
            data: yearlygraphRemainingPrincipleTotal,
        }],
        labels: graphYears,
    },
});
// Will graph the remianing principle of the payments throught the years. 
const stx = document.getElementById('breakDownChart')
const lineChart = new Chart(stx, {
    data: {
        datasets: [ {
            type: 'line',
            label: 'Principle Payment $',
            data: yearlygraphPrinciplePayments,
        },
        {
            type: 'line',
            label: 'Interest Payment $',
            data: yearlygraphInterestPayments,
        }],
        labels: graphYears,
    },

});

// Will graph the difference between interest and princple for each payment made.
const ptx = document.getElementById('pieChart')
const mixedChart = new Chart(ptx, {

    type: 'doughnut',
    data: {
        labels: ['Total Interest','Total Principle'],
        datasets: [{
            label: '$',
            data: [totalInterestPayment, remainingMortgage],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    }

}
);
lineChart.update();
mixedChart.update();
graphChart.update();
}












const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',fixedMortgagePayment);