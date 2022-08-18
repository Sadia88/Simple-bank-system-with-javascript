let depositeTotalMoney=0;
let WAmount=0;
// console.log('clicked')
document.getElementById('btn-deposit').addEventListener('click',function(){
let depositFiled=parseFloat(document.getElementById('deposit-filed').value)
if(isNaN(depositFiled)){
    alert('Type valid number')
    return
}
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
    if(isNaN(withdrawtFiled)){
        alert('Type valid number')
        return
    }
    const balanceAmount=document.getElementById('balance-amount')
    TotalBalanceAmountString=balanceAmount.innerText
    TotalBalanceAmount=parseFloat(TotalBalanceAmountString)   

    if(withdrawtFiled >TotalBalanceAmount){
        alert("You have no balance")
    }
   else{
    WAmount=withdrawtFiled+WAmount;

    document.getElementById('w-amount').innerText=WAmount

 
 Balance=TotalBalanceAmount-withdrawtFiled;
 balanceAmount.innerText=Balance
   }
withdrawtFiled.value=''
})