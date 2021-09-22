var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');
var message = document.querySelector('#error-msg');
var noOfNote = document.querySelectorAll(".notes");

const availableNote = [2000,500,100,20,10,5,1];
button.addEventListener('click', function validateFunction(){
    // First checking wherther the bill is grater than zero
    var cashgiven = Number(cashGiven.value);
    var billamount = Number(billAmount.value);
    if(cashgiven > 0 && billamount > 0){
        // Checking bill is smaller than our cash or not
        // If it is small then we can pay the bill.
        if(cashgiven >= billamount){
            const returnAmount = cashgiven - billamount;
            calculateFun(returnAmount);

        }else{
            //bill amount is greater than cash
            // console.log('wront input');
            errorMsgFun('Bill amount is greater than Cash amount');
        }
    }else{
        // bill is less  than small
        errorMsgFun('Do you want to wash plates?');
    }
});
// Calculate function: 
// 1. substracting cash value with bill amount e.g.:
//cash=2000 and bill=50 output = 2000-50 => 1950
// 2. passing the output to the calculate function
// 3. divide output/2000 and truncate it
//math.trunc(1950/2000) => 0
//1950 % 2000 = 1950
// Math.trucn(1950 / 500) = 3
// 1950 % 500 => 450
// math.trunc(450 / 100) = 4
// 450 % 100 =>50
//Math.trunc(50 / 20 ) = 2
// 50 % 20 => 10
//Math.trunc(10 /10 )= 1
//10 % 10 => 0
function calculateFun(returnAmount){
    console.log('entered in to calculate');
    output.innerText = 'Amount to be returned' +parseInt(returnAmount);
    if(returnAmount < 1 ){
        errorMsgFun('No amount to be returned');
    }
    for(let i = 0 ; i < availableNote.length; i++){
        const numberOfNodes = Math.trunc(
            returnAmount / availableNote[i]
        );
        returnAmount = returnAmount % availableNote[i];
        noOfNote[i].innerText = numberOfNodes;
    }
}
// function compute(remainder, noteAmt, index){
//     let mod = remainder;
//     if(mod >= noteAmt){
//         mod = remainder % noteAmt;
//         remainder = remainder - mod;
//         let notes = remainder / noteAmt;
//         noOfNote[index].innerText = notes;
//     }
//     return mod;
// }

// function msgHide(){
//     message.style.display = "none";
// }

function errorMsgFun(msg){
    message.style.display = 'block';
    message.innerText = msg;
}