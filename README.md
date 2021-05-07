# CoolCalc

A novelty online calculator to put my knowledge of HTML, CSS, and JavaScript into use.

## To-Do List:

**Items I am currently working on appear at the top with an exclamation mark next to them. Completed items appear at the bottom with a green tick next to them**

- :heavy_exclamation_mark: Add a limit to the number of digits we can place in the display to prevent overflow
- :heavy_exclamation_mark: Add basic arithmetic functionality to the operator buttons
- :heavy_check_mark: Fix bug where numbers don't register initially but work after clicking on the "C" button

## Features Used:

### HTML:

- "data-" Attribute - I've recently discovered that HTML5 gives us the ability to add our own custom attributes to any HTML elements using
  the "data-" attribute which is pretty useful. I've set up a custom attribute called "data-button-type" on the buttons to identify what type of button they are.
  This information is used by my app.js file to make a decision on the appropriate function to call
- CSS Grid - I'm using a CSS Grid container to organise the elements within the calculator itself

### JavaScript:

- Arrow function - I'm using a simple arrow function as the callback function to the addEventHandler function as I've found it is perfect to use in this case and is still simple to read. It works correctly for the purpose and can be used as we don't need to use the "this" keyword
- Loops and Conditionals - I've made use of "for of" loops which are perfect to iterate over arrays and have used this to iterate over the NodeList returned by the querySelectorAll() method that's been assigned to the "buttons" constant
- String template literal - String template literals, in my opinion, are essential to working in JavaScript with string formatting. They make my life so much easier. I use a string template literal within the operatorUpdateDisplay() function
