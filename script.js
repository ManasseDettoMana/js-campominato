
function numeroCasuale(nBombe,vBombe){

    for(let i=0;i<nBombe;i++){
        let app=Math.floor(Math.random() * 100) + 1;        //metto il numero randomico in una variabile d'appoggio.
        if(vBombe.includes(app)){                           //controllo se il numero è già presente nel vettore.
            i--;                                            //se è presente torno indietro con il conteggio di 1.
        }else{                                              //altrimenti lo aggiungo al vettore.
            vBombe.push(app);
        }
    }
}

function loopGame(nBombe, nCaselle, vettoreBombe){
    let i=0;
    let numero;
    let condizione=true;
    let numeriInseriti = [];

    do{
        numero=parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

        if(i>nCaselle-nBombe || numero<1 || numero>100 || vettoreBombe.includes(numero) || numeriInseriti.includes(numero)){
            condizione=false;
        }else{
            numeriInseriti.push(numero);
            i++;
        }

    }while(condizione);

    return i;
}

let nBombe = 16;
let nCaselle=100;
let vettoreBombe = [];

numeroCasuale(nBombe, vettoreBombe);
console.log(vettoreBombe);
let punteggioTotale= loopGame(nBombe, nCaselle, vettoreBombe);


alert(" il punteggio totale è di " + punteggioTotale);



