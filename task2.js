function basicOp(str, num1, num2) {
    switch(str) {
      case "+": 
        alert(num1 + num2); 
        break;
      case "-": 
        alert(num1 - num2);  
        break;
      case "*": 
        alert(num1 * num2);  
        break;
      case "/": 
        alert(num1 / num2); ; 
        break; 
      default:
        alert("I don't know what me do :(");
    }  
  }

  var number1, number2, operator;
  number1 = +prompt("Enter first number", "");
  number2 = +prompt("Enter second number", "");
  operator = prompt("Enter operator", "");
  basicOp(operator, number1, number2);