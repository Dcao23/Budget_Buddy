
const mtx = document.getElementById('chart');

const auto1 = document.getElementById('auto').innerHTML;
var auto = parseInt(auto1);
const personal1 = document.getElementById('personal').innerHTML;
var personal = parseInt(personal1);
const mortgage1 = document.getElementById('mortgage').innerHTML;
var mortgage = parseInt(mortgage1);
const credit1 = document.getElementById('credit').innerHTML;
var credit = parseInt(credit1);
const student1 = document.getElementById('student').innerHTML;
var student = parseInt(student1);
const utilities1= document.getElementById('utilities').innerHTML;
var utilities = parseInt(utilities1);
                      const budgetChart = new Chart(mtx, {
                        
                        type: 'doughnut',
                        data: {
                            labels: ['Auto Loan', 'Personal Loan', 'Mortgage/Rent', 'Credit Card', 'Student Loan', 'Utilities'],
                            datasets: [{
                                label: 'Total Spending by Category (US$)',
                                data: [auto, personal, mortgage, credit, student, utilities],
                                backgroundColor: [
                                    'rgb(255, 0, 0)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 255, 51)',
                                    'rgb(0, 0, 204)',
                                    'rgb(0, 128, 0)',
                                    'rgb(255, 0, 255)'
                                ],
                                hoverOffset: 4
                            }]
                        }

                    }
                    );
                
                