const path = require("path");

console.log(__dirname);
console.log(__filename);

//Pode colocar quantas pastas quiser
console.log(path.join(__dirname, "pasta"));
//Parte da pasta
console.log(path.resolve("pasta", "teste"));
//Informações do caminho
console.log(path.parse(__dirname));
//Mostra extensão do arquivo
console.log(path.extname(__filename));
