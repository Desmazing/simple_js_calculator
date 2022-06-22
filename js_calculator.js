let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

let operator = prompt("Enter valid mathematical operation: ");

if (operator == '+') {
    console.log(`${num1}${operator}${num2} = ${parseInt(num1) + parseInt(num2)}`)
}
else if (operator == '-'){
    console.log(`${num1}${operator}${num2} = ${parseInt(num1) - parseInt(num2)}`)
}
else if (operator == '*'){
    console.log(`${num1}${operator}${num2} = ${parseInt(num1) * parseInt(num2)}`)
}
else if (operator == '/'){
    console.log(`${num1}${operator}${num2} = ${parseInt(num1) / parseInt(num2)}`)
}
else {
    console.log(`${operator} is an invalid operator`)
}