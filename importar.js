const getFlag = require("./exportar.js");         //require importa o codigo de um arquivo externo

let name = getFlag(process.argv[2]);
let greetings = getFlag(process.argv[4]);

console.log(`${greetings} ${name}`);