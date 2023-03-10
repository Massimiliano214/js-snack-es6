const listaBici = [
    {
        nome: "Atala",
        "peso (Kg)": 5,
    },
    {
        nome: "Bottecchia",
        "peso (Kg)": 2.5,
    },
    {
        nome: "Kuota",
        "peso (Kg)": 3, 
    }
];

let containerDom = document.querySelector(".container");

const pesoBici = [];


for (let i = 0; i < listaBici.length; i++) {

    const { "peso (Kg)":peso, nome} = listaBici[i];
    
    pesoBici.push(peso);
    console.log(pesoBici);
    console.log("peso bici singola " + pesoBici[i]);

    if (pesoBici[i] < pesoBici[i - 1]) {
        containerDom.innerHTML = 
        `
        la bici ${nome} è la più leggera; ${peso} kg.
        `;
        console.log("la bici pesa" + peso + nome);
    }
    
}

/*
if (peso[i] > peso) {
        peso = peso[i];
        containerDom.innerHTML = 
        `
        la bici ${nome} è la più leggera; ${peso} kg.
        `;
        console.log("la bici pesa" + peso + nome);
    }
    */