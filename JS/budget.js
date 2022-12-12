// function budgetInpuField(element){
//     const inputField = document.getElementById(element);
//     const inputFieldString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldString);
//     inputField.value = "";
//     return;
// }

document.getElementById("calculate-id").addEventListener("click", function(){
    const calculateInputField = document.getElementById("player-input");
    const calculateInputString = calculateInputField.value;
    const calculateInputFieldValue = parseFloat(calculateInputString);
    calculateInputField.value = "";
    // console.log(calculateInputFieldValue);

    const paseExpanses = document.getElementById("player-expenses");
    const paseExpansesString = paseExpanses.innerText;
    const paseExpansesValue = parseFloat(paseExpansesString);
    // console.log(paseExpansesValue + calculateInputFieldValue);

    const totalPaseExpanses = paseExpansesValue + calculateInputFieldValue;
    const totalPaseExpansesGun = totalPaseExpanses * 5;
    paseExpanses.innerText = totalPaseExpansesGun;

});

document.getElementById("calculate-total").addEventListener("click", function(){
    const managerInputField = document.getElementById("manager-input");
    const managerInputString = managerInputField.value;
    const calculateInputValue = parseFloat(managerInputString);
    managerInputField.value = "";
    // console.log(calculateInputValue);
    
    const coachInputField = document.getElementById("coach-input");
    const coachInputSting = coachInputField.value;
    const coseInputValue = parseFloat(coachInputSting);
    coachInputField.value = "";
    // console.log(coseInputValue)

    const calculateTotal = coseInputValue + calculateInputValue ;
    // console.log(calculateTotal);

    const total = document.getElementById("total-id");
    const totalString = total.innerText;
    const totalValue = parseFloat(totalString);
    // console.log(totalValue);

    const paseExpanses = document.getElementById("player-expenses");
    const paseExpansesString = paseExpanses.innerText;
    const paseExpansesValue = parseFloat(paseExpansesString);

    const totalElementValue = calculateTotal + totalValue + paseExpansesValue;
    total.innerText = totalElementValue;








})