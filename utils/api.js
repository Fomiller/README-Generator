const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  async getUser(results){
    const queryUrl = `https://api.github.com/users/${results.username}`;
    return await axios.get(queryUrl);
  }
};     

module.exports = api;

