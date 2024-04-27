#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 1000;
let myPin = 2010;

let welcome : string = "Welcome to the INEX ATM";
console.log(chalk.blue(welcome));

let UserId = await inquirer.prompt([
    {
        type: "string",
        name :"Id",
        message : chalk.bold.yellow("Enter your ID"),

    },
]);
console.log(UserId.Id);

let pinNumber = await inquirer.prompt([
    {
        type :"number",
        name : "Userpin",
        message : "Enter your four digit Pin:"
    }
]);

if (pinNumber.Userpin === myPin ) {
    console.log(chalk.italic.green("pin number is correct"));
} else {
   console.log(chalk.italic.red("invalid pin number"));
}

let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        Message:"Choose any one ",
        choices:["Withdraw Amount" , "Check Balance"]
    }

])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            type:"number",
            name:"amount",
            message:"Enter your amount to Withdraw",
        }
    ])
    if(amountAns.amount > myBalance){
        console.log(chalk.italic.red("insufficient balance"))
    }
    else{
        myBalance -= amountAns.amount;
        console.log(chalk.bold.greenBright(`${amountAns.amount} Withdraw Successfully`));
        console.log(chalk.yellow(`your remaining balance is : ${myBalance}`));
    }
}
else if(operationAns.operation === "Check Balance"){
    console.log(chalk.bgGreenBright(`your Account balance is :${myBalance}`));
}
    













