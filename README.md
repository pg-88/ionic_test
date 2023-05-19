# Appunti

- [Appunti](#appunti)
  - [prova delle funzionalità di Ionic](#prova-delle-funzionalità-di-ionic)
    - [Creare nuovo component](#creare-nuovo-component)
    - [app component](#app-component)
    - [class component](#class-component)
    - [routing app](#routing-app)
    - [Creare collegamenti tra le pagine](#creare-collegamenti-tra-le-pagine)
    - [Usare un service](#usare-un-service)
  - [jsPDF](#jspdf)
    - [Metodi della classe jsPDF:](#metodi-della-classe-jspdf)
    - [autoTable????](#autotable)
  - [Come Procedere:](#come-procedere)
    - [Canvas](#canvas)


## prova delle funzionalità di Ionic

### Creare nuovo component

`ionic g component "component_name"`
comando che genera automaticamente una cartella (dentro app) con i 4 files che servono a far funzionare il component

### [app component](test-app/src/app/home/home.page.html)

Parte HTML della pagina, **template**, sfrutta la logica del component che si trova in app.component.ts.
Angular si occupa del binding dei dati tra il template e la class component:
- **Property binding** -> Per modificare il valore di attributi dei tag bisogna mettere il nome dell'attributo tra `[]` e assegnargli un nome variabile che sarà ripreso nella class component. [doc](https://angular.io/guide/property-binding)
- **Event binding** -> Per associare la chiamata di una fz (metodo) a un evento, si inserisce nel tag il nome evento tra tonde esempio: `(click)="myOnCick()"` dove myOnClick() sarà definita nel class component.
- per utilizzare gli elementi del template inserisco un nome preceduto da # che posso richiamare dalla class component.

### [class component](test-app/src/app/home/home.page.ts)

Contiene la logica di funzionamento del component.
Si tratta di una classe typescript che ha anche i decoratori e i moduli di ng.
Il constructor si usa in maniera particolare nel senso che vanno passati come parametri i servizi e moduli importati per averli a disposizione nella classe, però nel blocco del constructor non va inserito nulla.

- `@Component` contiene un json con selector (nome con il quale ci si può riferire al component)
- Classe che si chiama come il component
- Constructor: nel constructor vanno passate come parametri, le variabili che rappresenteranno i service e il routing dell'app. esempio:
  >`constructor(private mioServizio: NomeServizio){}`
- `ngOnInit()`: metodo che viene lanciato quando si carica il component. Tipo onLoad.
- Per rintracciare gli elementi del template (ai quali è stato dato un nome con `#`) inizializzo la variabile nel constructor oppure uso `@ViewChild`. 
  >Il parametro `static: true` passato come json al decoratore `@ViewChild`, permette di trovare elementi del template statici ovvero che non sono generati in runtime. Il default è false.



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

## Come Procedere:

- Creare un canvas che starà dentro un component *(preview)* che mostra un layout del documento.
  - canvas nel template che servirà tipo target
  - disegnare tutto il contenuto nel canvas
  - diversi metodi per inserire testo linee e immagini.
- Dal canvas creare il pdf

### Canvas
**ctx** è la variabile che viene utilizzata per il context, quella che definisce il dominio ('2d' o '3d') e permette di disegnare nel canvas.
Approfondire le proprietà di ctx per allineare meglio gli elementi.
Creare un sistema (una classe o un service) per impostare decentemente gli elementi nella pagina.

*per ora mi sono appoggiato al template usando una reference per l'elemento canvas, forse si può fare tutto senza modificare il template quindi creando una variabile tipo HTMLElementCanvas all'interno della component class e lavorare su quella.*