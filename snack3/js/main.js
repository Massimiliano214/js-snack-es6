

/* let arrayGenerato = [];


funzione()

console.log(arrayGenerato);

function funzione() {
    arrayGenerato[0] = prompt("inserisci la prima città");
    arrayGenerato[1] = prompt("inserisci la seconda città");
    arrayGenerato[2] = prompt("inserisci la terza città");
    const primoNumero = parseInt(prompt("inserisci il primo numero"));
    const secondoNumero = parseInt(prompt("inserisci il secondo numero"));

    let arraySelezionato = "";
    arraySelezionato = arrayGenerato.filter((citta) => {
        if (citta >) {
            console.log("arrayselezionato " + arraySelezionato);
            return true;
            
        }
        console.log("arrayselezionato " + arraySelezionato);
        return false;
        
    });



    return arrayGenerato;
} */





const cittaScelte = ["Roma", "Milano", "Venezia", "Bari"];

const numeroMin = parseInt(prompt("inserisci un numero partendo da 0"));
const numeroMax = parseInt(prompt("inserisci il numero minore di 4"));

let cittaGenerate = [];




cittaScelte.forEach((element, index) => {
    if ((index >= numeroMin) && (index <= numeroMax)) {
        
        cittaGenerate = [element];
        console.log(cittaGenerate);
    }
});


