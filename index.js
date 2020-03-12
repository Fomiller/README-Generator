const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api.js");

const questions = [
    {
        type: "input",
        message: "What is your github user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description of your project.",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What should be incuded in your table of contents?",
        name: "contents",
        choices: [
            {name: "Installation", checked: true},
            {name: "Usage", checked: true},
            {name: "Contributing", checked: true},
            {name: "License", checked: true},
            {name: "Credits", checked: true},
            {name: "Badges", checked: true},
            {name: "Test", checked: true},
            {name: "Contact", checked: true},
        ],
    },
    {
        type: "checkbox",
        message: "What Languages are you using?",
        name: "badges",
        choices: [
            {name: "HTML", checked:true},
            {name: "CSS", checked:true},
            {name: "JavaScript", checked:true},
            {name: "jQuery", checked:true},
            {name: "Node.js", checked:false},
            {name: "React.js", checked:false},
            {name: "Angular.js", checked:false},
            {name: "Vue.js", checked:false},
            {name: "Python", checked:false},
            {name: "Django", checked:false},
            {name: "Ruby", checked:false},
            {name: "Rails", checked:false},
            {name: "Go", checked:false},
        ],
    },
    {
        type: "input",
        message: "Who helped build this application?",
        name: "authors"
    },
    {
        type: "list",
        message: "What license do I need for this program",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GNU GPLv3",
            "ISC",
            "Rust",
        ]
    },
    {
        type: "input",
        message: "What do people need to know about contributing to your project",
        name: "contributing"
    },

];

inquirer
    .prompt(questions)    
    .then((response) => {
        // console.log(response)
        const {username, name, title, description, contents, badges, authors, license, contributing} = response;
        console.log({username})
        console.log({name})
        console.log({title})
        console.log({contents})
        console.log({description})
        console.log({badges})
        console.log({authors})
        console.log({license})
        console.log({contributing})
        api.getUser({username});
      });


function writeToFile(fileName, data) {
}

function init() {

}

init();