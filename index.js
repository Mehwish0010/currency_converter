#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(" WELCOME TO THE CURRENCY CONVERTER MADE BY MEHWISH FATIMA"));
const currency = {
    PKR: 280,
    USD: 1, //BASE CURRENCY
    INR: 83.99,
    EUR: 0.93,
    GBP: 0.8,
    CAD: 1.37,
    AUD: 1.54,
    JPY: 154,
    NZD: 1.67,
    CHF: 0.91,
    ZAR: 18.87,
    RUB: 92.1,
    BGN: 1.83,
    CNY: 7.28,
};
let user_answer = await inquirer.prompt([{ name: "from",
        message: "Which currency from",
        type: "list",
        choices: ["PKR", "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY", "NZD", "CHF", "ZAR", "RUB", "BGN", "CNY"]
    },
    {
        name: "to",
        message: "Enetr To Currency",
        type: "list",
        choices: ["PKR", "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY", "NZD", "CHF", "ZAR", "RUB", "BGN", "CNY"]
    },
    { name: "amount",
        type: "number",
        message: "Enter your amount",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //base currency USD
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgYellow(convertedAmount));
