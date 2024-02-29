const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const writeFileAsync = util.promisify(fs.writeFile);
var team = [];

Manager_question = [{
  type: 'input',
  name: 'name',
  message: 'What is manager\'s name?',
},
{
  type: 'input',
  name: 'id',
  message: 'What is manager\'s employee ID?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is manager\'s email id?',
},
{
  type: 'input',
  name: 'officeNumber',
  message: 'What is manager\'s officeNumber?',
},]

Main_Menu_Question = [{
  type: 'list',
  name: 'nextAction',
  message: 'What do you want to do next?',
  choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
},]

Engineer_Question = [{
  type: 'input',
  name: 'name',
  message: 'What is engineer\'s name?',
  },
  {
  type: 'input',
  name: 'Id',
  message: 'What is engineer\'s employee ID?',
  },
  {
  type: 'input',
  name: 'email',
  message: 'What is engineer\'s email id?',
  },
{
type: 'input',
name: 'github',
message: 'What is manager\'s github name?',
},]
                        

Intern_Question = [
  {
    type: 'input',
    name: 'name',
    message: 'What is intern\'s name?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is intern\'s employee ID?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is intern\'s email id?',
},
{
    type: 'input',
    name: 'school',
    message: 'What is intern\'s school name?',
},
]                    
                    
const mainMenu = () => 
  inquirer.prompt(Main_Menu_Question)
  .then((answers) => {
    if (answers.nextAction === 'Add an Engineer'){
      return engineerMenu();
    } else if (answers.nextAction === 'Add an Intern'){
      return internMenu();
    } else {
      return team;
    }
  });

const promptUser = () => 
  inquirer.prompt(Manager_question)
  .then((answers) => {
    console.log(answers)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    team.push(manager);
    console.log(team)
    return mainMenu()
  }); 
  
const engineerMenu = () => 
  inquirer.prompt(Engineer_Question)
  .then((answers) => { 
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    team.push(engineer);
    return mainMenu()  
  });  

const internMenu = () => 
  inquirer.prompt(Intern_Question)
  .then((answers) => { 
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    team.push(intern);
    return mainMenu()  
  }); 

promptUser()
  .then((team) => writeFileAsync(outputPath, render(team)))
  .then(() => console.log('Successfully wrote to team.html'))
  .catch((err) => console.error(err));