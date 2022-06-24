import fs from 'fs';
import inquirer from 'inquirer';

const method = async () => {
    var input = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter your name",
        default() {
            return "new"
        }
    })
    fs.mkdirSync(input.name);
    var input1 = await inquirer.prompt({
        name: "filename",
        type: "input",
        message: "Enter your filename",
        default() {
            return "controller"
        }
    });
    var input2 = await inquirer.prompt({
        name: "ext",
        type: "input",
        message: "Enter your extension",
        default() {
            return "ts"
        }
    })
    fs.writeFileSync(`./${input.name}/${input1.filename}.${input2.ext}`, 
    "import express from 'express'"
    );

    console.log(input)
}


await method()