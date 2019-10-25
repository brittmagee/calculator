/*
Steps: 
1. Create the html for the calculator. Make sure to include: numbers, arithmetic functions, 
    reset, and average button.
2. Make sure that there is an input section and that each button overlays the html. 
3. Create a function so that each click on a button stores the data into the input section. 
4. Create an equals function that does the math for each operator 
6. Create a reset button
*/ 


var a ="0"; //first number
var b="0"; // second number that is displayed i.e. current
operation = 0; //to record the math functions 
var result; //result

let enter = document.getElementById("enter");
let value = enter.value;

//create a function that allows the button click to show up in the display 
function insert(num){
    document.getElementById("enter").value +=num
}

//create reset function to reset the display
function reset (){
    document.getElementById("enter").value= ""
}

//create a function that does the math using the evaluation of 2 numbers
function equals (){
    let a = document.getElementById("enter").value;
    let b = eval(a);
    document.getElementById("enter").value = b
}

