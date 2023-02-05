const express = require("express");         //Importa o express para criar servidor
const app = express();          //Cria a variavel q vai ser utilizada

app.set("view engine", "ejs");          //Coloca o ejs para ser interpretado pelo motor grafico

app.get("/", function(req, res){            //Cria uma rota padrão que vai renderizar o arquivo index.ejs (o ejs ja esta setado acima)
    const items = [
        {
            title: "D",
            message: "esenvolver"
        },
        {
            title: "E",
            message: "JS"
        },
        {
            title: "M",
            message: "elhorar"
        },
        {
            title: "A",
            message: "uto"
        },
        {
            title: "I",
            message: "nteligente"
        },
        {
            title: "S",
            message: "abio"
        }
    ];

    const subtitle = "Aprendendo EJS no curso da Rocketseat"

    res.render("pages/index", {         //Renderiza a pagina e passa um objeto com os valores necessarios
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function(req, res){           //Cria uma segunda rota para a aba sobre do site
    res.render("pages/about");
});

app.listen(8080);           //Porta que vai ficar esperando
console.log("Rodando");