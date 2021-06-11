//ondragstart del dom : Questo gestore di eventi viene collegato all'elemento trascinabile e si attivera quando si verifica un evento di dragstart
function onDragStart(event){ //settare l'id dell'elemento
    event
        .dataTransfer //mantiene le informazione dello spostamento in corso
        .setData('text/plain', event.target.id); //il metodo set data viene utilizzato per impostare le informazioni sullo stato dell'elemento che viene spostato. Esso prende due paramentri una stinga che diachiara il formato del secondo parametro e i dati effettivi

    event
        .currentTarget.style.backgroundColor = 'yellow';//modificare lo stile dell'elemento usando un metodo del DOM
}

//ondragover del dom : Questo gestore di eventi sarà collegato all'elemento dropzone e si attiverà quando si verifica un evento dragover
function onDragOver (event){
    event.preventDefault();//perchè div nel broswer non accetta il dropping di default
}

let nodi = [];//dichairato globale per non resettare il contenuto all'interno
let i=0;//contatore per salvare i nodi all'interno dell'array
let num_tentativi=5;
let y1,y2;

//ondrop del dom : Questo gestore di eventi sarà collegato all'elemento dropzone e si attiverà quando si verifica un evento drop.
function onDrop (event){
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);//ritorna l'elemento il cui id è uguale all'id passatogli come stringa, gli id sono unici
    const dropzone = event.target;//selezioniamo la nostra dropzone
    dropzone.appendChild(draggableElement);//aggiungiamo il pezzo trascinato alla dropzone

    event.dataTransfer.clearData(); //resettiamo l'oggetto datatrasfer

    nodi[i]=id;//asseganzione alla posizione i dell'id dell'oggetto corrente

    if(nodi[i] == 'pezzo_1'){
        let x;
        y1= document.getElementById('n1').value;
        x= document.createElement("div");
        document.getElementById('tabella_codice').appendChild(x);
        x.innerHTML= 'int a=</div>' + y1 + ';</div>';
    }
    if(nodi[i] == 'pezzo_2'){
        let x2;
        y2= document.getElementById('n2').value;
        x2= document.createElement("div");
        document.getElementById('tabella_codice').appendChild(x2);
        x2.innerHTML= 'int b= </div>' + y2 + ';</div>';

    }
    if(nodi[i] == 'pezzo_3'){
        let x3;
        x3= document.createElement("div");
        document.getElementById('tabella_codice').appendChild(x3);
        x3.innerHTML= 'printf("sum of the number : %d",a+b) </div>';
    }
    /*if(nodi[i] == 'pezzo_4'){
        let x4;
        x4= document.createElement("div");
        document.getElementById('tabella_codice').appendChild(x4);
        x4.innerHTML= 'codice 4 </div>';
    }
    if(nodi[i] == 'pezzo_5'){
        let x5;
        x5= document.createElement("div");
        document.getElementById('tabella_codice').appendChild(x5);
        x5.innerHTML= 'codice 5 </div>';
    }*/

    i++;//incrementiamo i per il successivo id dell'elemento
    num_tentativi--;

    if(nodi[0] == 'pezzo_1' && nodi[1] == 'pezzo_2' && nodi[2]=='pezzo_3' /*&& nodi[3]=='pezzo_4' && nodi[4]=='pezzo_5'*/  && y1=='9' && y2=='24'){
        console.log('vero');
        localStorage[8]='true';

        document.getElementById('scritta_winner').style.display = 'block';
    }

    if(num_tentativi == 0 && (nodi[0] != 'pezzo_1' || nodi[1] != 'pezzo_2' || nodi[2] !='pezzo_3' /*|| nodi[3] !='pezzo_4' || nodi[4] !='pezzo_5'*/  || y1!='9' || y2!='24') ){
        console.log('Sbagliato');

        document.getElementById('scritta_gameover').style.display = 'block';
    }

}