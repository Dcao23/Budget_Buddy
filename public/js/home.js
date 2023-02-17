
const assetFormHandler = async (event) => {
  event.preventDefault();
  const assetAmount = document.querySelector("#assetAmount").value.trim();
  const assetAmount1 = document.querySelector("#assetAmount1").value.trim();
  const assetAmount2 = document.querySelector("#assetAmount2").value.trim();
  const assetAmount3 = document.querySelector("#assetAmount3").value.trim();


  if (assetAmount && assetAmount1 && assetAmount2 && assetAmount3) {
    const response = await fetch("/api/assets", {
      method: "POST",
      body: JSON.stringify({ monthly_income: assetAmount, vehicles: assetAmount1, properties: assetAmount2, savings: assetAmount3 }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.href = "/home";
    } else {
      alert("Failed to post assets.");
    }
  }
};


const liabilitiesFormHandler = async (event) => {
  console.log(event)
   event.preventDefault();
  const liabilityAmount = document.querySelector("#liabilityAmount").value.trim();
  const liabilityAmount1 = document.querySelector("#liabilityAmount1").value.trim();
  const liabilityAmount2 = document.querySelector("#liabilityAmount2").value.trim();
  const liabilityAmount3 = document.querySelector("#liabilityAmount3").value.trim();
  const liabilityAmount4 = document.querySelector("#liabilityAmount3").value.trim();
  const liabilityAmount5 = document.querySelector("#liabilityAmount3").value.trim();

  if (liabilityAmount && liabilityAmount1 && liabilityAmount2 && liabilityAmount3 && liabilityAmount4 && liabilityAmount5) {
    const response = await fetch("/api/liabilities", {
      method: "POST",
      body: JSON.stringify({ auto_loan: liabilityAmount, personal_loan: liabilityAmount1, mortgage_rent: liabilityAmount2, credit_card: liabilityAmount3, student_loan: liabilityAmount4, utilities: liabilityAmount5 }),
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
  .querySelector(".asset-form")
  .addEventListener("submit", assetFormHandler);

document
  .querySelector(".liabilities-form")
  .addEventListener("submit", liabilitiesFormHandler);