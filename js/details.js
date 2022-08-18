let depositeTotalMoney=0;
let WAmount=0;
// console.log('clicked')
document.getElementById('btn-deposit').addEventListener('click',function(){
let depositFiled=parseFloat(document.getElementById('deposit-filed').value)

depositeTotalMoney=depositFiled+depositeTotalMoney;


document.getElementById('d-amount').innerText=depositeTotalMoney

const balanceAmount=document.getElementById('balance-amount')
TotalBalanceAmountString=balanceAmount.innerText
TotalBalanceAmount=parseFloat(TotalBalanceAmountString)
Balance=TotalBalanceAmount+depositFiled;
balanceAmount.innerText=Balance


})


document.getElementById('btn-withdraw').addEventListener('click',function(){
    
   
    let withdrawtFiled=parseFloat(document.getElementById('withdraw-filed').value)
    WAmount=withdrawtFiled+WAmount;

   document.getElementById('w-amount').innerText=WAmount

   const balanceAmount=document.getElementById('balance-amount')
TotalBalanceAmountString=balanceAmount.innerText
TotalBalanceAmount=parseFloat(TotalBalanceAmountString)
Balance=TotalBalanceAmount-withdrawtFiled;
balanceAmount.innerText=Balance
})