/* 
1. add event handler with Withdraw Button

2. get the withdraw amount from the withdraw input field
2-1. also make sure to convart the input into a number by using parseFloat

3. get pervious withdraw total

4. calculate total withdraw amount
4-1. set total withdraw amount

5. get previous balance total

6. calculate new balance total
6-1. set the new balance


7.clear the input field
*/

// Step-1

document.getElementById('btn-Withdraw').addEventListener('click', function () {

    // Step-2
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // For error 
    // Step-7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Entar a Number of Amount')
        return;
    }

    // tep-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const perviousWithdrawTotalString = withdrawTotalElement.innerText;
    const perviousWithdrawTotal = parseFloat(perviousWithdrawTotalString);


    // Step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const perviusBalanceTotal = parseFloat(previusBalanceTotalString);


    if (newWithdrawAmount > perviusBalanceTotal) {
        alert('Baap Er Bank a ato Dollar nai!!')
        return;
    }

    // For withdraw error
    // Step-4
    const currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;

    // Step 4-2
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step 6
    const newBalanceTotal = perviusBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})