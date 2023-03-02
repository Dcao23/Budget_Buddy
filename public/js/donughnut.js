const mtx = document.getElementById('chart')
                    //do a fetch here
                    const liabilitiesGet = async () => {
                        const result = await fetch(`/api/liabilities`, {
                          method: 'GET',
                        });
                        const liabilities = await result.json();
                      return liabilities;
                      
                    };
                    
                    const liabilities = liabilitiesGet();
                    console.log(liabilities);
                      const budgetChart = new Chart(mtx, {
                        
                        type: 'doughnut',
                        data: {
                            labels: ['Auto Loan', 'Personal Loan', 'Mortgage/Rent', 'Credit Card', 'Student Loan', 'Utilities'],
                            datasets: [{
                                label: 'Total Spending by Category (US$)',
                                data: [liabilities[0].auto_loan, liabilities[0].personal_loan, liabilities[0].mortgage_rent, liabilities[0].credit_card, liabilities[0].student_loan, liabilities[0].utilities],
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
                
                