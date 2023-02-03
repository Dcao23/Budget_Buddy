
// inputs to calculate mortgage payments

   

// equations for calculating monthly mortage payments
function fixedMortgagePayment () {
    // var interestRate= ($("#interestRate").val());
    // var years= $("#years").val();
    // var downPayment= $('#downPayment').val();
    // var mortgagecost=  $("#loanAmount").val();

    var interestRate= 3.5;
    var  years= 30;
    var downPayment= 0;
    var mortgagecost=  300000;
   

    numOfPaymentPeriods = years * 12;
    var remainingMortgage = mortgagecost - downPayment;
    monthlyIntRate = (interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentPeriods))) / (monthlyIntRate)
    monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    totalamounttopay = monthlyPayment * numOfPaymentPeriods

    console.log(downPayment)
    console.log(mortgagecost)
    console.log(interestRate)
    console.log(years)


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
    
    for (let i = 1; i< years + 1 ; i++ ){
        graphYears.push(`Year ${i}`);

    }

 return {totalInterestPayment, remainingMortgage, graphYears, yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }
}


// Will graph the remianing principle of the payments throught the years. 
var graphData = {totalInterestPayment, remainingMortgage, graphYears, yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }
    = fixedMortgagePayment()
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

// Will graph the difference between interest and princple for each payment made.
var graphData = {totalInterestPayment,remainingMortgage, graphYears, yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }  
fixedMortgagePayment()
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
var graphData = {totalInterestPayment,remainingMortgage, graphYears, yearlygraphPrinciplePayments, yearlygraphInterestPayments, yearlygraphRemainingPrincipleTotal }  
fixedMortgagePayment()
const ptx = document.getElementById('pieChart')
const mixedChart = new Chart(ptx, {

    type: 'doughnut',
    data: {
        labels: ['Total Interest','Total Principle'],
        datasets: [{
            label: '$',
            data: [totalInterestPayment,remainingMortgage ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    }

}
);



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',fixedMortgagePayment);