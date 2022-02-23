const fs = require("fs");
const path = require("path");
const { EOL } = require("os");
const caminhoArquivo = path.join(__dirname, "..","src","arquivos","teste.txt");
try{
    const textDoArquivo = fs.readFileSync(caminhoArquivo);
    console.log(textDoArquivo);
    console.log(textDoArquivo.toString("utf-8"));
    //console.log(textDoArquivo.data.toString("utf-8"));

} catch (error) {
    console.error(error);
}
const novoTextoDoArquivo = EOL + "Essa é uma nova linha";
try{
    fs.appendFileSync(caminhoArquivo, novoTextoDoArquivo);
} catch (error) {
    console.error(error);
}

setTimeout(() => console.log("Teste"), 2000);
setInterval(() => console.log("Teste 2"), 3000);

export{};