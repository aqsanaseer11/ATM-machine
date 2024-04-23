#!/usr/bin/env node

//1line
import inquirer from "inquirer"

let myBalance = 50000
let mypin = 12345

//line2
let pinAnswer = await inquirer.prompt([
    {
        name: "pincode",
        message: "Enter your pin :",
        type: "number"

    }]
);
if (pinAnswer.pincode === mypin) {
    console.log("Correct pin code!!")

    //line3
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select the option:",
                type: "list",
                choices: ["withdraw", "check balance", "fastcash"]
            }
        ]
    );

//line4
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount:",
                    type: "number"
                }
            ]
        );

        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount
            console.log(`"Your remaining balance is:"  ${myBalance} `)
        } else {
            console.log("Insufficient balance")
        }
    }

//line5
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is:  ${myBalance}`)
    } 
    
//line6    
else if (operationAns.operation === "fastcash") {
        let fastCash = await inquirer.prompt(
            [
                {
                    name: "fast_cash",
                    message: "Choose how much money you want to withdraw:",
                    type: "list",
                    choices: ["10000", "15000", "20000", "25000"]
                }
            ]
        );

//line7
        if (fastCash.fast_cash == 10000) {
            myBalance -= fastCash.fast_cash;
            console.log(`Your remaining balance is: ${myBalance} `)
        }
        else if (fastCash.fast_cash == 15000) {
            myBalance -= fastCash.fast_cash;
            console.log(`Your remaining balance is: ${myBalance} `)
        }
        else if (fastCash.fast_cash == 20000) {
            myBalance -= fastCash.fast_cash;
            console.log(`Your remaining balance is: ${myBalance} `)
        }
        else if (fastCash.fast_cash == 25000) {
            myBalance -= fastCash.fast_cash;
            console.log(`Your remaining balance is: ${myBalance} `)
        }

    }
}
else {
    console.log("Invalid pin code!!")
}
