let toDoList = [ 
    {task:'Arrange bed', status: 'Done'},
    {task:'Bath', status: 'Done' }, 
    {task:'Go Pratice', status: 'Done'}
];

const fetchToDoList = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
console.log(data);
return data;
    });
};

fetchToDoList();

// Asynch await assignement
const request = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
    
}


console.log(toDoList);

var viewButton = document.getElementById('to-do-btn')
console.log('button', viewButton);

let listItems = document.getElementById('list-items')


//es5 Syntax
// keyword function [name of the function] () {}
function showToDoList () {
    // create a li element
    // add text content
    // // attach the li to the ul element
   

    toDoList.forEach((value) => {
        const listItem = document.createElement('li')
        listItem.textContent = value.task + ' - ' + value.status;
        listItems.appendChild(listItem);
    });

    
}
// function call
// showToDoList();

viewButton.addEventListener('click', showToDoList);
























function addNumbers (text, firstNumber, secondNumber) {
    // let firstNumber = 35;
    // let secondNumber = 8;
    
    let total = firstNumber + secondNumber;
    // console.log(text + total);
}

addNumbers('2+5=',2, 5);
addNumbers('9+8=',9, 8);
addNumbers('12+16=',12, 16);

// function squareValue (number) {
//     let total = number * number;
//     console.log(total);
// }

const x = (x, y) => x * y;

const squareValue = (number) => number * number;
// console.log(squareValue(2));

// let squareValue = number => number * number;
// console.log(squareValue);

squareValue(2);
squareValue(4);
squareValue(9);
