
const path = require("path");
const { EOL } = require("os");
const fs= require("fs");
import chalk from 'chalk';
console.log(chalk.magenta("Teste de cor"));

try{
    const dadosArquivo = fs.readFileSync(path.join(__dirname,"..","..","src","arquivos","exercicioNomes.txt"))
    const dadosEmString = dadosArquivo.toString("utf-8");
    const dadosEmVetor = dadosEmString.split(EOL);
    const nomeComA = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "A");
    const nomeComC = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "C");
    const nomeComD = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "D");
    
    nomeComA.forEach((e: string) => console.log(chalk.red(e)));
    nomeComC.forEach((e: string) => console.log(chalk.blue(e)));
    nomeComD.forEach((e: string) => console.log(chalk.magenta(e)));
    
    
    console.log(dadosArquivo);
    console.log(dadosEmString);
    } catch(error) {
        console.error(error);
    }

export{};