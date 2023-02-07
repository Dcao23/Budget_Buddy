const liabilitiesFormHandler = async (event) => {
    console.log(event)
    // event.preventDefault();
    const liabilityAmount = document.querySelector("#liabilityAmount").value.trim();
    console.log(liabilityAmount)
    const liabilityAmount1 = document.querySelector("#liabilityAmount1").value.trim();
    const liabilityAmount2 = document.querySelector("#liabilityAmount2").value.trim();
    const liabilityAmount3 = document.querySelector("#liabilityAmount3").value.trim();
    const liabilityAmount4 = document.querySelector("#liabilityAmount3").value.trim();
    const liabilityAmount5 = document.querySelector("#liabilityAmount3").value.trim();

    if (liabilityAmount && liabilityAmount1 && liabilityAmount2 && liabilityAmount3 && liabilityAmount4 && liabilityAmount5) {
        const response = await fetch("/api/liability/", {
            method: "POST",
            body: JSON.stringify({ auto_loan: liabilityAmount, personal_loan: liabilityAmount1, mortgage_rent: liabilityAmount2, credit_card: liabilityAmount3, student_loan: liabilityAmount4, utilities: liabilityAmount5, user_id: req.session.user_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.href = "/home";
        } else {
            alert("Failed to post liability.");
        }
    }
};


document
    .querySelector(".liabilities-form")
    .addEventListener("submit", liabilitiesFormHandler);