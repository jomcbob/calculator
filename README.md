the following is what I was going for
{
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:

add
subtract
multiply
divide

A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5.

There should also be a display for the calculator.

Add a “clear” button.

Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

Gotchas: watch out for and fix these bugs if they show up in your code:

Your calculator should not evaluate more than a single pair of numbers at a time. 

You should round answers with long decimals so that they don’t overflow the display.

Pressing = before entering all of the numbers or an operator could cause problems!

Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

Extra credit

Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.

Add a “backspace” button, so the user can undo their last input if they click the wrong number.

Add keyboard support!
}