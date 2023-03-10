const listaSquad = [
    {
        nome: "Atalanta",
        "punti fatti": 0,
        "falli subiti": 0,
    },
    {
        nome: "Milan",
        "punti fatti": 0,
        "falli subiti": 0,
    },
    {
        nome: "Salernitana",
        "punti fatti": 0,
        "falli subiti": 0,
    }
];

let nomiFalli = [
    {

    },
    {
        
    }
];

listaSquad.forEach((element, index) => {

    element["punti fatti"] = randomNumber(1, 30);
    element["falli subiti"] = randomNumber(1, 30);

    console.log(element);
});


function randomNumber(min, max) {
    let numeroCasuale = Math.floor((Math.random() * max) + min);
    return numeroCasuale;
}


for (let i = 0; i < listaSquad.length; i++) {
    const {nome, "falli subiti":falli} = listaSquad[i];
    
    nomiFalli = {
        nome: nome,
        falli: falli,
    }
    console.log(nomiFalli);
}

