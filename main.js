// A basic aritmetic calculator 
const num1 = parseFloat(prompt("Enter a number:"));
let op = prompt("Enter operator: +, -, *, /");
const num2 = parseFloat(prompt("Enter aother number:"));

if (op == "+") {
   alert(num1 + num2);
} else if (op == "-") {
   alert(num1 - num2);
} else if (op == "*") {
    alert(num1 * num2);
} else if (op == "/") {
    alert(num1 / num2);
} else {
    alert("Please enter a valid Number/Operator");
}
