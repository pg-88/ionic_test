# Appunti

## prova delle funzionalità di Ionic


### [app component](test-app/src/app/app.component.html)

Parte HTML della pagina, sfrutta la logica del component che si trova in app.component.ts.

La pagina è di fatto angular e usa 

### Creare nuovo component

`ionic g component "component_name"`
comando che genera automaticamente una cartella (dentro app) con i 4 files che servono a far funzionare il component


### [routing app](test-app/src/app/app-routing.module.ts)

Gestisce l'indirizzamento dell'app. Anche per ogni component viene creato un file routing che serve per avere una parte di pagina renderizzata al suo interno

### Creare collegamenti tra le pagine

Esistono sostanzialmente due metodi:
- nella pagina dove si trova il link (o bottone) si invoca un metodo collegato all'evento di click che invoca il router e assegna il nuovo indirizzo (path che è indicato in [app-routing.module.ts](./test-app/src/app/app-routing.module.ts))

- si può usare il routerLink in maniera simile a un href per i tag anchor passando tra parentesi [] il percorso path del routing

<xml>
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class MyComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/my-page'])
  }
}
</xml>

nell'esempio sopra:
- my-page è il selector di una pagina già creata nell'app
- router è un nome di una variabile, posso dare un nome diverso l'importante è che sia del tipo Router.

### Usare un service

Nel constructor dei component vanno dichiarate le variabili che richiamano (nella dichiarazione del tipo) il modulo (routing piuttosto che service) da utilizzare nel codice.

Per utilizzare un service (o un router) bisogna dichiarare una variabile nel constructor che richiama nel tipo il modulo importato.

Ogni service ha una funzione ben specifica in modo da mantenere ben distnti i compiti di ogni parte di codice.


## jsPDF 

- install:
>`npm install jspdf --save`

- import 
>import { jsPDF } from "jspdf";

- uso: instanziare un oggetto dela classe jsPDF()

### Metodi della classe jsPDF:
- [text](https://artskydj.github.io/jsPDF/docs/jsPDF.html#text) 
 >`text(text, x, y, optionsopt, transform) → {jsPDF}` 
 >>Args:
 >>text è una stringa
 >>
 >> x è la coordinata espressa nell'unità dichiarata per l'oggetto jsPDF, rispetto al bordo di sinistra del foglio.
 >>
 >> y è la coordinata espressa nell'unità dichiarata per l'oggetto jsPDF, rispetto al bordo superiore del foglio.

- [html](https://artskydj.github.io/jsPDF/docs/module-html.html#~html)

Unico parametro obbligatorio è l'elemento html o stringa equivalente.
Mentre il metodo text ritorna un oggetto pdf con il testo passatogli al suo interno, il metodo html non ha ritoro. 
Per salvare il pdf è necessario farlo con una fz di [callback](https://en.wikipedia.org/wiki/Callback_(computer_programming)#JavaScript) passata opzionalmente come parametro del metodo.


### autoTable????
