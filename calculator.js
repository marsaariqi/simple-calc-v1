const resultInput = document.getElementById('result');
let expression = '';
let lastButton = '';

// Function to toggle the sign of the number
function toggleSign() {
    expression = parseFloat(expression) * -1 + '';
  }
  
  // Add click event listener to all buttons
  document.querySelectorAll('.button-style').forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.textContent;
      
      // Check if the last button pressed was an operator or a dot
      if ((lastButton === 'operator' && button.classList.contains('operator')) || 
          (lastButton === '.' && buttonValue === '.')) {
        expression = expression.slice(0, -1); // Remove the last character
      }
      
      if (buttonValue === 'AC') {
        expression = '';
      } else if (buttonValue === '=') {
        evaluateExpression();
      } else if (buttonValue === '+/-') {
        toggleSign();
      } else {
        expression += buttonValue;
      }
      
      lastButton = buttonValue === '.' ? '.' : (button.classList.contains('operator') ? 'operator' : '');
      
      resultInput.value = expression;
    });
  });

function evaluateExpression() {
  try {
    expression = eval(expression);
    if (isNaN(expression) || !isFinite(expression)) {
      throw new Error('Invalid expression');
    }
    expression = expression.toString();
  } catch (error) {
    expression = 'Error';
  }
}