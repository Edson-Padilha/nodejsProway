
const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

try{
const dadosArquivo = fs.readFileSync(path.join(__dirname,"..","..","src","arquivos","exercicioNomes.txt"))
const dadosEmString = dadosArquivo.toString("utf-8");
const dadosEmVetor = dadosEmString.split(EOL);
const nomeComA = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "A");

console.log(nomeComA);

console.log(dadosArquivo);
console.log(dadosEmString);
} catch(error) {
    console.error(error);
}
export {};