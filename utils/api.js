const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");



const api = {
    getUser({ username }){

      inquirer
      .prompt({
        message: "Enter your GitHub username",
        name: "username"
      })
      .then(function({ username }){
        const queryUrl = `https://api.github.com/users/${username}`;
            axios
              .get(queryUrl)
              .then(function(res) {
                console.log(res)
                // console.log(res.data)
                // console.log(res.data.avatar_url)
                // console.log(res.data.email)
              })
              .catch(function (error) {
              // handle error
              console.log(error);
              })
        });  
    }
};
    



module.exports = api;
  