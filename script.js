const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const check = document.querySelector(".btn-success");

check.addEventListener("click", () => {

    const bill = billAmount.value;
    const cash = cashGiven.value;

    if (!bill == "" && !isNaN(bill) && bill > 0) {
        if (parseInt(cash) >= parseInt(bill)) {

        }else{
            alert("Cash given should be greater than bill amount")
        }
    } else {
        alert("Enter the amount in proper positive number")
    }


})