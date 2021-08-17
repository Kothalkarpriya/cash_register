const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const button = document.querySelector('#btn');

const message = document.querySelector('#error-msg');
const noOfNote = document.querySelectorAll(".notes");

// const hideButton = document.querySelector("#hiding");

//Hiding from the button
// hideButton.addEventListener('click', function(){
//     cashGiven.style.visibility = "hidden";
// })

const availableNote = [2000,500,100,20,10,5,1];
button.addEventListener('click', function validateFunction(){
    msgHide();
    // First checking wherther the bill is grater than zero
    if(billAmount.value > 0){
        // Checking bill is smaller than our cash or not
        // If it is small then we can pay the bill.
        if(cashGiven.value >= billAmount.value){
            const returnAmount = cashGiven.value - billAmount.value;
            calculateFun(returnAmount);

        }else{
            //bill amount is greater than cash
            console.log('wront input');
            errorMsgFun('Invalid Input');
        }
    }else{
        // bill is less  than small
        errorMsgFun('Invalid Input');
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
    for(let i = 0 ; i < availableNote.length; i++){
        const numberOfNodes = Math.trunc(
            returnAmount / availableNote[i]
        );
        returnAmount = returnAmount % availableNote[i];
        noOfNote[i].innerText = numberOfNodes;
    }
}

function msgHide(){
    message.style.display = "none";
}

function errorMsgFun(msg){
    message.style.display = 'block';
    message.innerText = msg;
}