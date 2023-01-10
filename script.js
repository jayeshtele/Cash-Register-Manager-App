const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const check = document.querySelector(".btn-success");

check.addEventListener("click", () => {

    const bill = billAmount.value;
    const cash = cashGiven.value;

    if (!bill == "" && !isNaN(bill) && bill > 0) {
        if (cash >= bill) {
            console.log("Yes")
        }else{
            console.log("No")
        }
    } else {
        alert("Enter the amount in proper positive number")
    }


})