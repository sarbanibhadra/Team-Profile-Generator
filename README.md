# Module 12 Object-Oriented Programming: Team Profile Generator

## Task

The task is to take the given starter code and convert it into a working Node.js command-line application. This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The tests have been provided, every part of this code has passed each provided test.

## User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## Description

* Created a command-line application that accepts accepts user input using the provided starter code.   
  * Created classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Wrote code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Called the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Created an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

* This application have used [Jest](https://www.npmjs.com/package/jest) for running unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application is invoked by using the following command:

```bash
node index.js
```

---

## Action points

* I make the methods as pure as possible. This means the methods simple so that they are easier to test.

* The different employee types have all inherited some methods and properties from a base class of `Employee`.
 
* I make sure to test out each class and verify it generates an object with the correct structure and methods. This structure was crucial in order for the provided `render` function to work!
  
* I had created the `output` folder before running the appliocation.

---

## Grading Requirements

This Challenge is graded based on the following criteria: 

### Deliverables: 25%

* A sample HTML file generated using the application must be submitted

* Your GitHub repository containing your application code.

### Technical Acceptance Criteria: 50%

* Satisfies all of the preceding acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

	* All tests pass using the [Jest package](https://www.npmjs.com/package/jest).

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

### Repository Quality: 25%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description.

---



## Review

You are required to submit the following for review:

* A sample HTML file generated using your application. 
<img width="1470" alt="Screenshot 2024-01-30 at 20 40 44" src="https://github.com/sarbanibhadra/Team-Profile-Generator/assets/28161929/4e225f2b-081a-445c-b610-1a4c9de5415c">

* The URL of the GitHub repository, with a unique name and a readme describing the project.

