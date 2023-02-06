// inputs for calculating a monthly budget
const liabilities_names = [];
const liabilities_cost = [];

const response= await fetch(`/user/liabilities/auto_loan`, {
    method: 'Get'
    })
if (response.ok) {
    liabilities_names.push("Auto Loan");
    liabilities_cost.push(response)
} else {
    alert('Failed to add auto_loan');
}

const response1 = await fetch(`/user/liabilities/mortgage_rent`, {
    method: 'Get'
    })
if (response1.ok) {
    liabilities_names.push("Mortgage Rent");
    liabilities_cost.push(response1)
} else {
    alert('Failed to add Mortgage Rent');
}

const response2 = await fetch(`/user/liabilities/credit_card`, {
    method: 'Get'
    })
if (response2.ok) {
    liabilities_names.push("Credit Card");
    liabilities_cost.push(response2)
} else {
    alert('Failed to add Credit Card');
}

const response3 = await fetch(`/user/liabilities/student_loan`, {
    method: 'Get'
    })
if (response3.ok) {
    liabilities_names.push("Student Loan");
    liabilities_cost.push(response3)
} else {
    alert('Failed to add student_loan');
}

const response4 = await fetch(`/user/liabilities/utilities`, {
    method: 'Get'
    })
if (response4.ok) {
    liabilities_names.push("Utilities");
    liabilities_cost.push(response4)
} else {
    alert('Failed to add utilities');
}

const {liabilities_cost, liabilities_names} = require('../js/budjet.js')


module.exports = {liabilities_cost, liabilities_names};