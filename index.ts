#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import ChalkAnimation from "chalk-animation";
import { exit } from "process";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  const neonTitle = ChalkAnimation.neon(" \n Lets Do Some Basic Calculations");

  await sleep();
  neonTitle.stop();
  console.log(
    chalk.greenBright(`
   _____________________
  |  _________________  |
  | | JO  Krrish  0.  | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|
  
  `)
  );
}

await welcome();

async function Questions() {
  const answers = await inquirer.prompt([
    /* Pass your questions in here */

    {
      type: "list",
      name: "oprator",
      message: chalk.greenBright("What do you want to perform? \n"),
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: chalk.gray("Enter Number One: "),
    },

    {
      type: "number",
      name: "num2",
      message: chalk.gray("Enter Number Two: "),
    },
  ]);

  if (answers.oprator === "Addition") {
    console.log(
      chalk.blueBright(
        `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `
      )
    );
  } else if (answers.oprator === "Subtraction") {
    console.log(
      chalk.blueBright(
        `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `
      )
    );
  } else if (answers.oprator === "Multiplication") {
    console.log(
      chalk.blueBright(
        `${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2} `
      )
    );
  } else if (answers.oprator === "Division") {
    if (answers.num2 === 0) {
      console.log("You can't divide numbers by 0");
    } else
      console.log(
        chalk.blueBright(
          `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `
        )
      );
  }
}

// Questions();

async function stargAgain() {
  do {
    await Questions();
    var loopAgain = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: chalk.yellowBright(
        "Do you want to start again? Press y for Yes & n for No else program will be repeated"
      ),
    });
  } while (loopAgain.restart === "y");

  if (loopAgain.restart === "n") {
    console.log(chalk.greenBright("Calculator Program Eneded"));
    exit();
  } else {
    console.log(chalk.redBright(" Wrong Selection, Program Repeated"));
    stargAgain();
  }
}

stargAgain();
