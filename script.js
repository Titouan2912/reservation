const form = document.getElementById("reservation-form");
const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const priceDiv = document.getElementById("price");

function updatePrice() {
  const adults = parseInt(adultsInput.value) || 0;
  const children = parseInt(childrenInput.value) || 0;
  const total = (adults * 1500) + (children * 1450);
  priceDiv.textContent = `Prix total : $${total}`;
}

// Met à jour le prix quand on change les quantités
adultsInput.addEventListener("input", updatePrice);
childrenInput.addEventListener("input", updatePrice);
updatePrice(); // Initialisation

 document.getElementById("resevation").addEventListener("click", function () {
    window.location.href = "https://titouan2912.github.io/paiment/";
  });
