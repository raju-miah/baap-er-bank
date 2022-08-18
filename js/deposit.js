
// Step-1: add eventlistener on the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: get the deposit ammount from the deposit input field
    // for input field use .value to the value inside the input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(depositAmount)
    // console.log(typeof newDepositAmount);
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);


    // Step-3: get the current deposit total
    // for non-input (element other then input, textarea) use innerText to get the text 

    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    console.log(previusDepositTotal)
    const currentDepositTotal = previusDepositTotal + newDepositAmount;


    // Step-4: add number to set the total deposit
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const perviusBalanceTotal = parseFloat(previusBalanceTotalString);

    // step-6: calculate current total balance

    const currentBalanceTotal = perviusBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7: remove the number after adding deposit amount 

    depositField.value = '';


})