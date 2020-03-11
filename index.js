var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");

const questions = [
    
];







inquirer
    .prompt([
        {
        type: "input",
        message: "What is your user name?",
        name: "username"
        },
    ])
    .then(function(response) {

        if (response.confirm === response.password) {
          console.log("Success!");
        }
        else {
          console.log("You forgot your password already?!");
        }
      });


function writeToFile(fileName, data) {
}

function init() {

}

init();