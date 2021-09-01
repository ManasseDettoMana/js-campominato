
function numeroCasuale(nBombe){

    let vBombe = [];
    for(let i=0;i<nBombe;i++){
        let app=Math.floor(Math.random() * 100) + 1;        //metto il numero randomico in una variabile d'appoggio.
        if(vBombe.includes(app)){                           //controllo se il numero è già presente nel vettore.
            i--;                                            //se è presente torno indietro con il conteggio di 1.
        }else{                                              //altrimenti lo aggiungo al vettore.
            vBombe.push(app);
        }
    }
    return vBombe;
}

function loopGame(nBombe, nCaselle, vettoreBombe){

    let numero;
    let condizione=true;
    let numeriInseriti = [];

    do{
        numero=parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

        if(numero<1 || numero>100 || numeriInseriti.includes(numero)){
            alert("Numero non valido");
            continue;
        }

        if(numeriInseriti.length>nCaselle-nBombe ||  vettoreBombe.includes(numero)){
            condizione=false;
        }else{
            numeriInseriti.push(numero);
        }

    }while(condizione);

    return numeriInseriti.length;
}



let nBombe;
let nCaselle=100;
let vettoreBombe = numeroCasuale(nBombe);

let livello=prompt("Seleziona la difficoltà  \"FACILE\" \"MEDIA\" o \"DIFFICILE\"");



if(livello.trim().toLowerCase()== "facile"){
    nBombe=5;
}else if(livello.trim().toLowerCase()== "media"){
    nBombe=16;
}else if(livello.trim().toLowerCase()== "difficile"){
    nBombe=30;
}
    



alert("Hai scelto " + livello);


console.log(vettoreBombe);

 let punteggioTotale= loopGame(nBombe, nCaselle, vettoreBombe);


alert(" il punteggio totale è di " + punteggioTotale);
