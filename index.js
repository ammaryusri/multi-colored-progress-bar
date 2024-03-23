// Define your outerColorWeighage array
const outerColorWeighage = [
  { color: "#E26969", weighage: 10 },
  { color: "#51DA67", weighage: 40 },
  { color: "#DAB451", weighage: 50 },
];

// Function to create and style inner bars
function createInnerBars() {
  const innerBarsContainer = document.getElementById("innerBarsContainer");
  console.log("outerColorWeighage");

  outerColorWeighage.forEach((item, index) => {
    console.log("item.weighage");
    console.log("item.color");
    const innerBar = document.createElement("div");
    innerBar.classList.add("inner-bar");
    innerBar.style.flex = item.weighage;
    innerBar.style.background = item.color;
    innerBarsContainer.appendChild(innerBar);
  });
}

// Call the function to create inner bars when the DOM is loaded
document.addEventListener("DOMContentLoaded", createInnerBars);
