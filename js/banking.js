//handle deposit button event 
document.getElementById('Diposite-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('Diposite-input')
        ;
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update diposite total
    const depositTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositTotal = previousDepositeAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;



    // update account balance
    const balanceTotal = document.getElementById('balance-total')
        ;
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
})


// handle withdraw event hansler
document.getElementById('Withdrow-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('whthdrow-input');
    const wihthdrowAmountText = withdrawInput.value;
    const newWithdrowAmount = parseFloat(wihthdrowAmountText);
    console.log(newWithdrowAmount);

    // set withdraw total 
    const wihthdrowTotal = document.getElementById('Withdrow-total');
    const previousWithdrawText = wihthdrowTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrowAmount;
    wihthdrowTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;

    balanceTotal.innerText = newBalanceTotal;
    // clear withdrow input
    withdrawInput.value = "";
})