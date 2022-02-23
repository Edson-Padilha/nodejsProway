const path = require("path");
const fs = require("fs");

interface User {
    nome: string;
    idade: number;
    email: string;
}

function getUserByName(name: string) {
    const dadosArquivo = fs.readFileSync(path.join(__dirname,"..","..","src","arquivos","users.json"));
    const dadosEmString = dadosArquivo.toString("utf-8");    
    const dadosEmJason = JSON.parse(dadosEmString);

    const usuarioEncontrado = dadosEmJason.find((e: User)=> e.nome.toUpperCase() === name.toUpperCase());

    if (!usuarioEncontrado){
        console.log("Usuário não foi encontrado");
        return
    }
    console.log(usuarioEncontrado);
}
getUserByName("joao");

export{};