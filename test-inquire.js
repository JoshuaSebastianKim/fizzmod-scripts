const inquirer = require('inquirer');

inquirer.prompt([{type: "list", name:"sarasa",choices: ["AR", "CL", "CO", "PE"], message: "mensaje"}]).then(function (answers) {
	console.log('anwsers', answers);
	// Use user feedback for... whatever!!
});