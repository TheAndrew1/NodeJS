const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ");          //process.stdout.write apresenta valores na saida de dados
}

ask();

const answers = [];
process.stdin.on("data", data => {          //process.stdin.on("Evento", funcao) para manter o programa esperando entrada de dados
    answers.push(data.toString().trim())
    if(answers.length < questions.length)
    {
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on("exit", () => {
    console.log("\n" + answers);
})