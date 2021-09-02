
function numeroCasuale(nBombe){

    let vBombe = [];                                        //creo un vettore locale
    for(let i=0;i<nBombe;i++){
        let app=Math.floor(Math.random() * 100) + 1;        //metto il numero randomico in una variabile d'appoggio.
        if(vBombe.includes(app)){                           //controllo se il numero è già presente nel vettore.
            i--;                                            //se è presente torno indietro con il conteggio di 1.
        }else{                                              //altrimenti lo aggiungo al vettore.
            vBombe.push(app);
        }
    }
    return vBombe;                                          //faccio un return del vettore
}

function loopGame(nBombe, nCaselle, vettoreBombe){

    let numero;
    let condizione=true;
    let numeriInseriti = [];

    do{                                                                                         //AGGIUNGERE UNO SWITCH CASE QUI!!!!!!  
        numero=parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));                    //AGGIUNGERE UNO SWITCH CASE QUI!!!!!!
                                                                                                //AGGIUNGERE UNO SWITCH CASE QUI!!!!!!
        if(numero<1 || numero>100 || numeriInseriti.includes(numero) || isNaN(numero)){         //AGGIUNGERE UNO SWITCH CASE QUI!!!!!!
            alert("Numero non valido");
            continue;
        }

        if(numeriInseriti.length>nCaselle-nBombe ||  vettoreBombe.includes(numero)){
            condizione=false;
        }else{
            numeriInseriti.push(numero);
        }

    }while(condizione);

    return numeriInseriti.length;           //uso la lunghezza del vettore con i numeri inseriti come punteggio                     
}



let nBombe;
let nCaselle=100;


condizioneLivello=true;           //condizione per uscire dal while

while(condizioneLivello){         //ciclo per controllare che sia scritto correttamente il livello

    livello=prompt("Seleziona la difficoltà  \"FACILE\" \"MEDIA\" o \"DIFFICILE\"");

    if(livello.trim().toLowerCase() == "facile"){
        nBombe=5;
        condizioneLivello=false;
    }else if(livello.trim().toLowerCase() == "media"){
        nBombe=16;
        condizioneLivello=false;
    }else if(livello.trim().toLowerCase() == "difficile"){
        nBombe=25;
        condizioneLivello=false;
    }
    
}

alert("Hai scelto " + livello);
let vettoreBombe=numeroCasuale(nBombe);

console.log(vettoreBombe);

let punteggioTotale= loopGame(nBombe, nCaselle, vettoreBombe);
alert(" il punteggio totale è di " + punteggioTotale);
