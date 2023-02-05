module.exports = getFlag;           //module.exports exporta o codigo para outro arquivo

function getFlag(flag_name){
    let flag_content = process.argv[process.argv.indexOf(flag_name)+1];         //process pega informacoes do processo chamado no terminal

    return flag_content;
}