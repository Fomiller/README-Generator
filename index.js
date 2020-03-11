const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api.js");

const userName= "Fomiller";

api.getUser(userName)

// const questions = [
//     {
//         type: "input",
//         message: "What is your user name?",
//         name: "username"
//     },
//     {
//         type: "input",
//         message: "What is your first name?",
//         name: "firstName"
//     },
//     {
//         type: "input",
//         message: "What is your last name?",
//         name: "lastName"
//     },
// ];

// inquirer
//     .prompt(questions)
//     .then(function(response) {
//         console.log(response.username)
//         console.log(response.firstName)
//         console.log(response.lastName)
//       });


function writeToFile(fileName, data) {
}

function init() {

}

init();