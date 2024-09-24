let toDoList = ['Arrange bed', 'Bath', 'Go Pratice'];
console.log(toDoList);

var viewButton = document.getElementById('to-do-btn')
console.log(viewButton);


//es5 Syntax
// keyword function [name of the function] () {}
function showToDoList () {
    alert('The function has been called');
}
// function call
showToDoList();

viewButton = document.addEventListener('click', showToDoList);

function addNumbers (text, firstNumber, secondNumber) {
    // let firstNumber = 35;
    // let secondNumber = 8;
    
    let total = firstNumber + secondNumber;
    console.log(text + total);
}

addNumbers('2+5=',2, 5);
addNumbers('9+8=',9, 8);
addNumbers('12+16=',12, 16);

function squareValue (number) {
    let total = number * number;
    console.log(total);
}

squareValue(2);
squareValue(4);
squareValue(9);
