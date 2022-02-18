const os = require("os");

//Monitora cpu
console.log(os.cpus());

//console.log(os.freemem());
const memoriaEmBytes = os.freemem();
//const memoriaEmMegabytes = Math.floor(memoriaEmBytes / 1024 / 1024);
//console.log(`A quantidade de memória disponível em MB é: ${memoriaEmMegabytes}`);
const memoriaEmMegabytes = Math.floor(memoriaEmBytes / 1024 / 1024 / 1024);
console.log(`A quantidade de memória disponível em GB é: ${memoriaEmMegabytes}`);

//Verifica qual a plataforma
console.log(os.platform());

//Verifica a quantidade de horas do computados ligado
console.log(os.uptime() / 60 / 60);
