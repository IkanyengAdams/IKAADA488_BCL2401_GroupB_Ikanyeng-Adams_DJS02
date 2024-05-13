# DJS02 Project Brief: Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:


1. **Initial State**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom
 
<h2 style="color:#e67e22">Unresolved Stories</h2> 

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown
 

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely
 

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.




