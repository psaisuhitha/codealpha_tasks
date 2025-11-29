Simple Web Calculator
A simple, responsive web-based calculator built with HTML, CSS, and vanilla JavaScript.
It supports basic arithmetic operations, clear and backspace actions, and keyboard input for convenient usage.

Features
Supports addition, subtraction, multiplication, division, and percentage operations.

Clear button to reset the current expression.

Backspace button to delete the last entered character.

= button to evaluate the full expression and show the result.

Keyboard support for digits, operators, Enter (to calculate), Backspace, and C/c (to clear).

Technologies Used
HTML5 for structure and layout.

CSS3 for styling and basic responsiveness.

Vanilla JavaScript for calculator logic, button handling, and keyboard support.

Project Structure
Example structure (rename files if yours differ):

text
.
├── index.html   # Calculator UI and layout
├── style.css    # Styles for the calculator
└── code.js      # Calculator logic and event handling
index.html contains the calculator container, display input, and all buttons.

style.css styles the calculator panel, buttons, and display field.

code.js implements functions like Solve, Result, Clear, Back, and the keyboard event listener.

How It Works
The display field with id="res" shows the current expression and result.

Solve(val) appends digits or operators to the display value.

Result() reads the expression, replaces the visual x with *, evaluates it, and shows the result or an error message on invalid input.

Clear() empties the display, and Back() removes the last character.

A keydown listener maps number and operator keys, Enter, Backspace, and C/c to the corresponding calculator functions.

Getting Started
Clone or download this repository to your local machine.

Make sure index.html, style.css, and code.js are in the same folder (or update the <link> and <script> paths if needed).

Open index.html in any modern web browser.

Click the buttons or use your keyboard to perform calculations.

Customization
Edit style.css to change colors, button shapes, fonts, or overall layout.

Add more advanced operations (like square root or power) by extending the HTML buttons and updating the JavaScript logic.

Enhance error handling or input validation as needed.