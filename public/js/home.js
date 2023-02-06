
const assetFormHandler = async (event) => {
const assetAmount = document.querySelector("#assetAmount").value.trim();
const assetAmount1 = document.querySelector("#assetAmount1").value.trim();
const assetAmount2 = document.querySelector("#assetAmount2").value.trim();
const assetAmount3 = document.querySelector("#assetAmount3").value.trim();

  if (assetAmount && assetAmount1 && assetAmount2 && assetAmount3) {
    const response = await fetch("/api/assets", {
      method: "POST",
      body: JSON.stringify({ assetAmount,assetAmount1,assetAmount2,assetAmount3 }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.href = "/home";
    } else {
      alert("Failed to post assets.");
    }
  }
};


const liabilitiesFromHandler = async (event) => {
    const liabilityAmount = document.querySelector("#liabilityAmount").value.trim();
    const liabilityAmount1 = document.querySelector("#liabilityAmount1").value.trim();
    const liabilityAmount2 = document.querySelector("#liabilityAmount2").value.trim();
    const liabilityAmount3 = document.querySelector("#liabilityAmount3").value.trim();
    const liabilityAmount4 = document.querySelector("#liabilityAmount3").value.trim();
    const liabilityAmount5 = document.querySelector("#liabilityAmount3").value.trim();

      if (liabilityAmount && liabilityAmount1 && liabilityAmount2 && liabilityAmount3 && liabilityAmount4 && liabilityAmount5) {
        const response = await fetch("/api/liabilities", {
          method: "POST",
          body: JSON.stringify({ liabilityAmount,liabilityAmount1,liabilityAmount2,liabilityAmount3,liabilityAmount4,liabilityAmount5 }),
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
  .querySelector(".login-form")
  .addEventListener("submit", assetFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", liabilitiesFromHandler);