const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const check = document.querySelector(".btn-success");

check.addEventListener("click", () => {

    if (!billAmount.value == "" && !isNaN(billAmount.value) && billAmount.value > 0) {

    } else {
        alert("Enter the amount in proper positive number")
    }


})